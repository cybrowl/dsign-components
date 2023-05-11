module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: false,
	singleQuote: true,
	printWidth: 80,
	svelteSortOrder: 'options-scripts-markup-styles',
	ignoreTemplateLiterals: true,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: ['*.svelte', '*.html, *js'],
			options: {
				printWidth: 80
			}
		},
		{
			files: [
				'*.json',
				'postcss.config.js',
				'rollup.config.js',
				'tailwind.config.js',
				'stylelint.config.js'
			],
			options: {
				printWidth: 150
			}
		},
		{
			files: ['*.json'],
			options: {
				parser: 'json'
			}
		}
	]
};
