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
	name="Create Username"
	args={{
		my_profile: {
			avatar: '',
			username: ''
		},
		modal_visible: {...modal_visible, account_creation: true},
		is_authenticated: true,
		navItems: navItems,
		project_store: projects_store
	}}
/>

<Story
	name="Username Created"
	args={{
		my_profile: {
			avatar: '',
			username: ''
		},
		modal_visible: {...modal_visible, account_creation: true},
		is_authenticated: true,
		navItems: navItems,
		project_store: projects_store,
		createdAccount: true
	}}
/>
