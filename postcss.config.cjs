const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

const config = {
	plugins: [postcssImport, tailwindcss(), autoprefixer]
};

module.exports = config;
