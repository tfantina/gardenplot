export const fetchContent = async (type) => {
    let allFiles;
    switch (type) {
        case "programming": allFiles = import.meta.glob('/src/content/programming/*.md');
            break;
        case "projects": allFiles = import.meta.glob('/src/content/projects/*.md');
            break;
        default: allFiles = import.meta.glob('/src/content/programming/*.md');
    }

    
    const allContent = Object.entries(allFiles);


    const content = await Promise.all(
        allContent.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.slice(12, -3);

            return {
                meta: metadata,
                path: postPath
            }
        })
    )


    return content;
}