<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import AccountCreationPage from '../../lib/pages/AccountCreationPage.svelte';
	import projects_store from './data/projects_store';

	const modal_visible = {
		account_creation: false,
		account_settings: false,
		move_snaps: false,
		snap_creation: false,
		project_options: false,
		project_rename: false
	};

	const navItems = [
		{name: 'Explore', isSelected: false},
		{name: 'Projects', isSelected: false},
		{name: 'Favorites', isSelected: false},
		{name: 'Profile', isSelected: true}
	];
</script>

<Meta
	title="Pages/Account Creation"
	component={AccountCreationPage}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<AccountCreationPage {...args} />
</Template>

<Story
	name="On Mount"
	args={{
		avatar:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: {...modal_visible, account_creation: true},
		is_authenticated: true,
		navItems: navItems,
		project_store: projects_store
	}}
/>
