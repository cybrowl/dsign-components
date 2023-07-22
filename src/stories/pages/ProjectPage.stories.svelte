<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProjectPage from '../../lib/pages/ProjectPage.svelte';
	import {
		project,
		project_2,
		project_many_snaps,
		project_imgs_empty,
		topics
	} from './data/project';

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
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
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
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
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
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
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
	name="Snaps / Auth / Owner / 2"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		is_owner: true,
		project: project_2,
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps / Auth / Owner / Edit"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
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
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
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
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
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
	name="Snaps Empty / Owner"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		is_owner: true,
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
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
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
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: false,
		project: {...project, tags: [], topics: topics},
		selectedTabState: {
			...selectedTabState,
			isFeedbackSelected: true
		}
	}}
/>

<Story
	name="Empty / Images"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: false,
		project: {...project_imgs_empty, tags: []},
		selectedTabState: {
			...selectedTabState,
			isSnapsSelected: true
		}
	}}
/>
