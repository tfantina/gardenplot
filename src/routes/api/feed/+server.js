import { fetchContent } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
    const allProjects = await fetchContent('all');

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

    const unique = (val, index, array) => {
        console.log(array.indexOf(val) === index)
        return array.indexOf(val) === index
    } 

    const tags = sortedProjects.flatMap(proj => {
        return proj.meta.tags.map(tag => tag.toLowerCase())
    }).filter(unique)


    return json({ content: sortedProjects, tags: tags })
}

