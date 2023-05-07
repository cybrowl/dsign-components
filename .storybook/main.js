// Error: Error [ERR_PACKAGE_PATH_NOT_EXPORTED]:
import {svelte} from '@sveltejs/vite-plugin-svelte';

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
	framework: {
		name: '@storybook/sveltekit'
	},
	docs: {
		autodocs: true
	},
	async viteFinal(config) {
		console.log('config: ', config);

		//FIX: plugin to process svelte and tailwindcss
		return config;
	}
};
