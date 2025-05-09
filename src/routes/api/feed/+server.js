import { fetchContent, fetchContentByTag } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	let sortedPosts, tags;
	const tag = url.searchParams.get('tag');
	const limit = url.searchParams.get('limit');

	if (tag) {
		const allProjects = await fetchContentByTag(tag);

		sortedPosts = allProjects.sort((a, b) => {
			return new Date(b.meta.date) - new Date(a.meta.date);
		});
		tags = [tag];
	} else {

		const allPosts = await fetchContent('blog', limit);
		sortedPosts = allPosts.sort((a, b) => {
			return new Date(b.meta.date) - new Date(a.meta.date);
		});

		if (limit && limit < sortedPosts.length) {
			sortedPosts = sortedPosts.slice(0, limit)
		}

		// Get all unique tags
		const unique = (val, index, array) => array.indexOf(val) === index;
		tags = sortedPosts
			.flatMap((proj) => proj.meta.tags.map((tag) => tag.toLowerCase()))
			.filter(unique)
			.sort();
	}

	return json({ content: sortedPosts, tags: tags });
};
