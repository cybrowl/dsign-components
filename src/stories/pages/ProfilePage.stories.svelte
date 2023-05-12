<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProfilePage from '../../lib/pages/ProfilePage.svelte';
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
	title="Pages/Profile"
	component={ProfilePage}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<ProfilePage {...args} />
</Template>

<Story
	name="Avatar Full Img / Guest"
	args={{
		avatar:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		navItems: navItems,
		project_store: projects_store
	}}
/>

<Story
	name="Avatar Empty / Guest"
	args={{
		avatar: '',
		username: 'jelly',
		modal_visible: modal_visible,
		navItems: navItems,
		project_store: projects_store
	}}
/>

<Story
	name="Avatar Small Img / Authenticated & Owner"
	args={{
		avatar: '/mishicat_bat.png',
		avatar_nav: '/mishicat_bat.png',
		username: 'mishicat',
		is_authenticated: true,
		is_owner: true,
		modal_visible: modal_visible,
		navItems: navItems,
		project_store: projects_store,
		showOptionsPopover: true
	}}
/>

<Story
	name="Avatar Empty / Authenticated & Owner"
	args={{
		avatar: '',
		avatar_nav: '',
		username: 'mishicat',
		is_authenticated: true,
		is_owner: true,
		modal_visible: modal_visible,
		navItems: navItems,
		project_store: projects_store,
		showOptionsPopover: true
	}}
/>

<Story
	name="Viewing Fellow Designer / Authenticated "
	args={{
		avatar:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		avatar_nav: '/mishicat_bat.png',
		username: 'jelly',
		is_authenticated: true,
		is_owner: false,
		modal_visible: modal_visible,
		navItems: navItems,
		project_store: projects_store
	}}
/>

<Story
	name="Nav Avatar Full Img  / Authenticated"
	args={{
		avatar: '/mishicat_bat.png',
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'mishicat',
		is_authenticated: true,
		is_owner: false,
		modal_visible: modal_visible,
		navItems: navItems,
		project_store: projects_store,
		showOptionsPopover: false
	}}
/>

<Story
	name="No Projects  / Authenticated & Owner"
	args={{
		avatar: '/mishicat_bat.png',
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'mishicat',
		is_authenticated: true,
		is_owner: true,
		modal_visible: modal_visible,
		navItems: navItems,
		project_store: [],
		showOptionsPopover: false
	}}
/>
