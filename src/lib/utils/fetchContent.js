import { fetchFromPixelfed, makeMetaFromPixelfed } from '$lib/utils'; 
export const fetchContent = async (type) => {
    let allFiles;
    switch (type) {
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
            const posted = await resolver();
            const res = posted.default.render();
            const postPath = path.slice(12, -3);

            return {
                meta: metadata,
                path: postPath,
            } 
        })
    )
}

const fetchAll = async () => {
    const posts = Object.entries(import.meta.glob('/src/content/blog/*.md'));
    const post_meta = await resolver(posts)
    const pixelfed_feed = await fetchFromPixelfed();
    const photos = await pixelfed_feed.json()
    const photo_meta = photos.map(photo => {
        return makeMetaFromPixelfed(photo) 
    })

    const allContent = post_meta.concat(photo_meta)
    return allContent 
}

export const fetchForRSS = async (tag) => {
    if (tag) {
        return true 
    }

    const posts = Object.entries(import.meta.glob('/src/content/blog/*.md'))
    const posts_and_content = await rssResolver(posts);
    const pixelfed_feed = await fetchFromPixelfed();
    const photos = await pixelfed_feed.json()
    const photo_meta = photos.map(photo => {
        return makeMetaFromPixelfed(photo) 
    })


    return posts_and_content.concat(photo_meta).sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

}       

const rssResolver = async (posts) => {
    return Promise.all(
        posts.map(async ([path, resolver]) => {
            const resolved = await resolver();
            const postPath = path.slice(12, -3);


            return {
                meta: resolved.metadata,
                path: postPath,
                content: resolved.default.render().html
            } 
        })
    )
}