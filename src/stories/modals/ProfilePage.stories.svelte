<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProfilePage from '../../lib/pages/ProfilePage.svelte';
	import projects_list from '../pages/data/projects_store';
	import {modal_visible} from '../pages/data/modal_visible';
</script>

<Meta
	title="Modals/Profile"
	component={ProfilePage}
	argTypes={{
		user_profile: {avatar: 'text', username: 'text'},
		modal_visible: {
			account_creation: 'boolean',
			account_settings: 'boolean',
			project_upsert: 'boolean',
			project_delete: 'boolean'
		}
	}}
/>

<Template let:args>
	<ProfilePage {...args} />
</Template>

<Story
	name="Account Settings"
	args={{
		my_profile: {
			username: 'mishicat'
		},
		user_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			username: 'jelly'
		},
		is_authenticated: true,
		is_owner: true,
		modal_visible: {...modal_visible, account_settings: true},
		favorite_store: {
			isFetching: false,
			projects: projects_list
		},
		profileTabsState: {
			isFavoritesSelected: true,
			isProjectsSelected: false
		}
	}}
/>

<Story
	name="Project Upsert / Create"
	args={{
		my_profile: {
			username: 'mishicat'
		},
		user_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			username: 'jelly'
		},
		is_authenticated: true,
		is_owner: true,
		mode_create: true,
		modal_visible: {...modal_visible, project_upsert: true},
		favorite_store: {
			isFetching: false,
			projects: projects_list
		},
		profileTabsState: {
			isFavoritesSelected: true,
			isProjectsSelected: false
		}
	}}
/>

<Story
	name="Project Upsert / Edit"
	args={{
		my_profile: {
			username: 'mishicat'
		},
		user_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			username: 'jelly'
		},
		is_authenticated: true,
		is_owner: true,
		modal_visible: {...modal_visible, project_upsert: true},
		favorite_store: {
			isFetching: false,
			projects: projects_list
		},
		profileTabsState: {
			isFavoritesSelected: true,
			isProjectsSelected: false
		}
	}}
/>

<Story
	name="Project Delete"
	args={{
		my_profile: {
			username: 'mishicat'
		},
		user_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			username: 'jelly'
		},
		is_authenticated: true,
		is_owner: true,
		modal_visible: {...modal_visible, project_delete: true},
		favorite_store: {
			isFetching: false,
			projects: projects_list
		},
		profileTabsState: {
			isFavoritesSelected: true,
			isProjectsSelected: false
		}
	}}
/>
