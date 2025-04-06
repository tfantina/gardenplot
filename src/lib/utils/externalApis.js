import { fetchContent } from '$lib/utils';
import { json } from '@sveltejs/kit';
import { XMLParser } from 'fast-xml-parser';

export const fetchFromPixelfed = async (type) => {
	const pixelfed_feed = await fetch(`https://pixelfed.social/users/tfantina.atom`)
		.then((res) => res.text())
		.then((xml) => {
			const parser = new XMLParser();
			let { feed: feed } = parser.parse(xml);

			const entries = feed.entry;
			let parsed = [];
			for (const entry of entries) {
				parsed.push({
					content: entry.content,
					updated: new Date(entry.updated),
					link: entry.id,
					title: entry.title.substring(0, 120) + '...'
				});
			}
			return parsed;
		});
	return json(pixelfed_feed);
};

export const makeMetaFromPixelfed = (photo) => {
	const hero = photo.content.match(/(?<=src=")[^"]+/g)[0];
	const meta = {
		title: photo.title,
		hero: hero,
		date: photo.updated,
		tags: ['photography'],
		source: 'pixelfed'
	};

	return {
		meta: meta,
		path: photo.link
	};
};

export const fetchBlogPosts = async () => {
	const recent_posts = await fetch(`https://blog.travisfantina.com/tag/programming/rss/`)
		.then((res) => res.text())
		.then((xml) => {
			let parsed = [];

			try {
				getPosts(xml, parsed);
			} catch (err) {
				console.log(err, 'Err retreving posts');
			}
			return parsed;
		});

	return recent_posts;
};

const getPosts = (xml, parsed) => {
	const parser = new XMLParser();
	const {
		rss: {
			channel: { item: items }
		}
	} = parser.parse(xml);
	for (const itm of items) {
		parsed.push({ title: itm.title, link: getLink(itm), date: itm.pubDate });
	}
};

const getLink = (itm) => {
	return itm.link.replace('https://travisblog.fly.dev/', 'https://blog.travisfantina.com/');
};
