import { fetchFromPixelfed, makeMetaFromPixelfed } from '$lib/utils'; 
export const fetchContent = async (type) => {
    let allFiles;
    switch (type) {
        case "programming": allFiles = import.meta.glob('/src/content/programming/*.md');
            break;
        case "projects": allFiles = import.meta.glob('/src/content/projects/*.md');
            break;
        case "blog": 
            return fetchAll();
            break
        default: return fetchAll();
    }

    const allContent = Object.entries(allFiles);
    const content = await resolver(allContent)

    return content;
}

export const fetchContentByTag = async (tag) => {
    let allFiles; 
    const posts = await fetchAll()
    const allContent = posts.filter((post) => includedTag(post, tag))
    return allContent;
}

const includedTag = (post, tag) => {
    return post.meta.tags.map(str => str.toLowerCase()).includes(tag)
}

const resolver = async (allContent) => {
    return Promise.all(
        allContent.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(12, -3);

            return {
                meta: metadata,
                path: postPath,
            } 
        })
    )
}

const fetchAll = async () => {
    const dispatchs = Object.entries(import.meta.glob('/src/content/blog/*.md'));
    const dispatch_meta = await resolver(dispatchs)
    const pixelfed_feed = await fetchFromPixelfed();
    const photos = await pixelfed_feed.json()
    const photo_meta = photos.map(photo => {
        return makeMetaFromPixelfed(photo) 
    })

    const allContent = dispatch_meta.concat(photo_meta)
    return allContent 
}