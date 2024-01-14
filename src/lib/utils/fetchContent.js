import { fetchFromPixelfed, makeMetaFromPixelfed } from '$lib/utils'; 
export const fetchContent = async (type) => {
    let allFiles;
    switch (type) {
        case "programming": allFiles = import.meta.glob('/src/content/programming/*.md');
            break;
        case "projects": allFiles = import.meta.glob('/src/content/projects/*.md');
            break;
        case "all": 
            return fetchAll();
            break
        default: allFiles = import.meta.glob('/src/content/programming/*.md');
    }

    const allContent = Object.entries(allFiles);
    const content = await resolver(allContent)

    return content;
}

const resolver = async (allContent) => {
    return Promise.all(
        allContent.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(12, -3);

            return {
                meta: metadata,
                path: postPath
            } 
        })
    )
}

const fetchAll = async () => {
    const dispatchs = Object.entries(import.meta.glob('/src/content/dispatches/*.md'));
    const projects = Object.entries(import.meta.glob('/src/content/projects/*.md'));
    const programming = Object.entries(import.meta.glob('/src/content/programming/*.md'));
    
    const dispatch_meta = await resolver(dispatchs)
    const project_meta = await resolver(projects);
    const programming_meta = await resolver(programming);
    const pixelfed_feed = await fetchFromPixelfed();
    const photos = await pixelfed_feed.json()
    const photo_meta = photos.map(photo => {
        return makeMetaFromPixelfed(photo) 
    })

    const allContent = dispatch_meta.concat(project_meta).concat(programming_meta).concat(photo_meta)

    return allContent 
}