module.exports = {
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'
	],
	addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-links',
		'@storybook/addon-svelte-csf',
		'storybook-dark-mode',
		{
			name: '@storybook/addon-styling'
		}
	],
	staticDirs: ['../src/lib/assets'],
	framework: {
		name: '@storybook/sveltekit'
	},
	docs: {
		autodocs: false
	}
};
