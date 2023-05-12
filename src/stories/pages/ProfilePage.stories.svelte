<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProfilePage from '../../lib/pages/ProfilePage.svelte';
	import projects_list from './data/projects_store';
	import {modal_visible} from './data/modal_visible';
</script>

<Meta
	title="Pages/Profile"
	component={ProfilePage}
	argTypes={{
		user_profile: {avatar: 'text', username: 'text'},
		modal_visible: {
			account_creation: 'boolean',
			account_settings: 'boolean',
			project_edit: 'boolean',
			project_edit: 'boolean'
		}
	}}
/>

<Template let:args>
	<ProfilePage {...args} />
</Template>

<Story
	name="Avatar Full Img / Guest"
	args={{
		user_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			username: 'jelly'
		},
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		}
	}}
/>

<Story
	name="Avatar Empty / Guest"
	args={{
		user_profile: {
			avatar: '',
			username: 'jelly'
		},
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		}
	}}
/>

<Story
	name="Avatar Small Img / Authenticated & Owner"
	args={{
		my_profile: {
			avatar: '/mishicat_bat.png',
			username: 'mishicat'
		},
		user_profile: {
			avatar: '/mishicat_bat.png',
			username: 'mishicat'
		},
		is_authenticated: true,
		is_owner: true,
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		}
	}}
/>

<Story
	name="Avatar Empty / Authenticated & Owner"
	args={{
		my_profile: {
			avatar: '',
			username: 'mishicat'
		},
		user_profile: {
			avatar: '',
			username: 'mishicat'
		},
		is_authenticated: true,
		is_owner: true,
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		}
	}}
/>

<Story
	name="Viewing Fellow Designer / Authenticated "
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b'
		},
		user_profile: {
			avatar: '/mishicat_bat.png',
			username: 'jelly'
		},
		is_authenticated: true,
		is_owner: false,
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		}
	}}
/>

<Story
	name="Nav Avatar Full Img  / Authenticated"
	args={{
		my_profile: {
			avatar: '/mishicat_bat.png'
		},
		user_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			username: 'jelly'
		},
		is_authenticated: true,
		is_owner: false,
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		}
	}}
/>

<Story
	name="No Projects  / Authenticated & Owner"
	args={{
		my_profile: {
			avatar: '/mishicat_bat.png'
		},
		user_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			username: 'jelly'
		},
		is_authenticated: true,
		is_owner: true,
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		}
	}}
/>

<Story
	name="No Projects  / Authenticated"
	args={{
		my_profile: {
			avatar: '/mishicat_bat.png'
		},
		user_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			username: 'jelly'
		},
		is_authenticated: true,
		is_owner: false,
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		}
	}}
/>

<Story
	name="Favorites Empty  / Authenticated & Owner"
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
		modal_visible: modal_visible,
		project_store: {
			isFetching: false,
			projects: projects_list
		},
		profileTabsState: {
			isFavoritesSelected: true,
			isProjectsSelected: false
		}
	}}
/>
