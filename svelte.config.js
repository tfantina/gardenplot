import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			split: false
		}),
		prerender: {
			handleHttpError: 'warn',
			handleMissingId: 'warn',
			entries: ['*']
		}
	},
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.md'], remarkPlugins: [
			() => (tree, file) => {
				// The content starts after the frontmatter
				const match = file.contents.match(/---\n([\s\S]*?)\n---\n([\s\S]*)/);
				if (match) {
					// match[2] contains everything after the frontmatter
					file.data.fm = {
						...file.data.fm,
						rawContent: match[2].trim()
					};
				}
			}
		]
	})],
};

export default config;
