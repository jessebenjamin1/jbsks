import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import pack from 'vite-imagetools';
const { imagetools } = pack;
import path from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), preprocess({ postcss: true })],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		csp: {
			directives: {
				'script-src': ['self', 'unsafe-inline'],
				'base-uri': ['self'],
				'img-src': ['self'],
				'object-src': ['none']
			}
		},
		files: {
			assets: 'src/static'
		},
		vite: {
			resolve: {
				alias: {
					$lib: path.resolve('src/lib'),
					$components: path.resolve('src/lib/components'),
					$static: path.resolve('src/static')
				}
			},
			plugins: [imagetools({ force: true })]
		}
	}
};

export default config;
