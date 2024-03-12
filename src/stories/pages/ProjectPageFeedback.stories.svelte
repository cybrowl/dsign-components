<script context="module">
	import ProjectPage from '../../lib/pages/ProjectPage.svelte';
	import {project_gamma, project_zeta} from './data/project';

	export const meta = {
		title: 'Pages/Project/Feedback',
		component: ProjectPage
	};
</script>

<script>
	import {Template, Story} from '@storybook/addon-svelte-csf';

	const modal_visible = {
		account_creation: false,
		account_settings: false,
		move_snaps: false,
		snap_creation: false,
		project_options: false,
		project_rename: false
	};

	const selectedTabState = {
		isFeedbackSelected: false,
		isSnapsSelected: false
	};
</script>

<Template let:args>
	<ProjectPage {...args} />
</Template>

<Story
	name="Authed & Guest: Zero Topics"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		project_store: {
			project: project_gamma
		},
		selectedTabState: {
			...selectedTabState,
			isFeedbackSelected: true
		}
	}}
/>

<Story
	name="Authed & Guest: Two Topics & Changes"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		project_store: {
			project: project_zeta
		},
		selectedTabState: {
			...selectedTabState,
			isFeedbackSelected: true
		}
	}}
/>
