import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import pack from 'vite-imagetools';
const { imagetools } = pack;
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$lib: path.resolve('src/lib'),
					$components: path.resolve('src/lib/components')
				}
			},
			plugins: [imagetools({ force: true })]
		}
	}
};

export default config;
