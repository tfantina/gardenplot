import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precrompress: false,
			struct: true,
			paths: {
				base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
			}
		})
	},
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
};

export default config;
