<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProjectPage from '../../lib/pages/ProjectPage.svelte';
	import {project, project_many_snaps} from './data/project';

	const modal_visible = {
		account_creation: false,
		account_settings: false,
		move_snaps: false,
		snap_creation: false,
		project_options: false,
		project_rename: false
	};

	const selectedTabState = {
		isChangesSelected: false,
		isFeedbackSelected: false,
		isSnapsSelected: false
	};
</script>

<Meta
	title="Pages/Project"
	component={ProjectPage}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<ProjectPage {...args} />
</Template>

<Story
	name="Snaps / Auth / Guest"
	args={{
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		project: project,
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps / Many / Auth / Guest"
	args={{
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		project: project_many_snaps,
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps / Auth / Owner"
	args={{
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		is_owner: true,
		project: project,
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps / Auth / Owner / Edit"
	args={{
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		is_owner: true,
		isEditActive: true,
		project: project,
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps / Guest / Guest"
	args={{
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: false,
		project: project,
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps Empty"
	args={{
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: false,
		project: {...project, snaps: []},
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="No Tags"
	args={{
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: false,
		project: {...project, tags: []},
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Feedback / Coming Soon"
	args={{
		avatar_nav:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: false,
		project: {...project, tags: []},
		selectedTabState: {
			...selectedTabState,
			isFeedbackSelected: true
		}
	}}
/>
