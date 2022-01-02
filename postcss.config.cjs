const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const config = {
	syntax: 'postcss-scss',
	plugins: [
		postcssNested(),
		autoprefixer(),
		cssnano({
			preset: 'default'
		})
	]
};

module.exports = config;
