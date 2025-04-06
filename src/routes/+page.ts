import { base } from '$app/paths';
import { lastFM, updateTrackListing, fetchBlogPosts } from '$lib/utils';

export const prerender = true;

export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/feed`);
	const { content: posts, tags: tags } = await response.json();

	// const songs = await lastFM()
	// const posts = await fetchBlogPosts()
	// updateTrackListing();
	return {
		title: 'Travis Fantina - Web gardner and caretaker',
		image: `${base}/images/storage/index/hero.jpeg`,
		posts,
		tags
	};
};
