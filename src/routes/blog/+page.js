export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/feed`);
	const { content: posts, tags: tags } = await response.json();
	return { posts, tags, title: 'Blog' };
};
