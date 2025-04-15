import { base } from '$app/paths';
import { lastFM, updateTrackListing, fetchBlogPosts } from '$lib/utils';

export const prerender = true;

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/feed`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const { content: posts, tags: tags } = await response.json();
		return {
			title: 'Travis Fantina - Web gardner and caretaker',
			image: `${base}/images/storage/index/hero.jpeg`,
			posts,
			tags
		};
	} catch (error) {
		console.error('Error fetching feed:', error);
		// Return default data if the API call fails
		return {
			title: 'Travis Fantina - Web gardner and caretaker',
			image: `${base}/images/storage/index/hero.jpeg`,
			posts: [],
			tags: []
		};
	}
};
