<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ExplorePage from '../../lib/pages/ExplorePage.svelte';
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
	title="Pages/Explore"
	component={ExplorePage}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<ExplorePage {...args} />
</Template>

<Story
	name="Explore / Authed"
	args={{
		my_profile: {
			avatar: '/mishicat_bat.png',
			username: 'mishicat'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navItems: navItems,
		project_store: projects_store
	}}
/>

<Story
	name="Explore / Guest"
	args={{
		my_profile: {
			avatar: '/mishicat_bat.png',
			username: 'mishicat'
		},
		modal_visible: modal_visible,
		is_authenticated: false,
		navItems: navItems,
		project_store: projects_store
	}}
/>

<Story
	name="Notification"
	args={{
		my_profile: {
			avatar: '/mishicat_bat.png',
			username: 'mishicat'
		},
		modal_visible: modal_visible,
		is_authenticated: false,
		navItems: navItems,
		notification_visible: {
			auth_error: true
		},
		notification: {
			message: 'Connect to Access'
		},
		project_store: projects_store
	}}
/>
