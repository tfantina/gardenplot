import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static'

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@use '$lib/scss/variables' as *;
				@use '$lib/scss/mixins' as *; 
				`
			}
		}
	},

	kit: {
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : ''
		}
	}
});

