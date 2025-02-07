const config = {
	stories: [
		'../src/stories/*.stories.@(js|ts|svelte)',
		'../src/stories/pages/*.stories.@(js|ts|svelte)'
	],

	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'storybook-dark-mode'
	],

	framework: {
		name: '@storybook/svelte-vite',
		options: {}
	},

	docs: {}
};

export default config;
