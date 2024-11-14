<script>
	import Login from '../components/login/Login.svelte';
	import get from 'lodash';

	import SnapCard from '../components/cards/SnapCard.svelte';
	import SnapCardCreate from '../components/cards/SnapCardCreate.svelte';
	import CardEmpty from '../components/cards/CardEmpty.svelte';
	import Circle from '../components/loading_spinners/Circle.svelte';
	// import Notification from '../components/Notification.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';
	import ProjectTabs from '../components/project/ProjectTabs.svelte';
	import ProjectInfo from '../components/project/ProjectInfo.svelte';
	import ProjectEditActionsBar from '../components/project/ProjectEditActionsBar.svelte';
	import Feedback from '../components/project/Feedback.svelte';

	import {createEventDispatcher} from 'svelte';
	import {isEmpty, map} from 'lodash';
	const dispatch = createEventDispatcher();

	export let my_profile = {};
	export let is_authenticated = false;
	export let project_store = {};
	export let is_edit_active = false;
	export let isFetching = false;
	export const navigationItems = [];
	export let isEditActive = false;
	export let selectedTabState = {};

	console.log('project_store: ', project_store);

	function deselect_all_snaps(snaps) {
		return map(snaps, snap => ({...snap, isSelected: false}));
	}

	function toggle_edit_mode(event) {
		isEditActive = !isEditActive;

		const deselected_snaps = deselect_all_snaps(project.snaps);

		project = {...project, snaps: deselected_snaps};
	}

	function goto_snap_preview(event) {
		console.log('goto_snap_preview: ', event);
	}

	function goto_snap_create(event) {
		console.log('goto_snap_create: ', event);
	}

	function accept_change(event) {
		console.log('accept_change: ', event.detail);
	}

	function reject_change(event) {
		console.log('reject_change: ', event.detail);
	}

	function remove_topic(event) {
		console.log('remove_topic: ', event.detail);
	}

	function select_topic(event) {
		console.log('select_topic: ', event.detail);
	}

	function send_message(event) {
		console.log('send_message: ', event.detail);
	}

	function select_file(event) {
		console.log('select_file: ', event.detail);
	}

	function download_file(event) {
		console.log('download_file: ', event);
	}
</script>

<main>
	<html lang="en" class="dark">
		<body>
			<div class="grid_layout">
				<div class="navigation_main_layout">
					<PageNavigation {navigationItems}>
						<Login {is_authenticated} {my_profile} />
					</PageNavigation>
				</div>

				<div class="loading_layout">
					{#if isFetching === true}
						<Circle />
					{/if}
				</div>

				{#if isFetching === false}
					<div class="project_info_layout">
						<ProjectInfo project={project_store.project} />
					</div>
					<div class="project_tabs_layout">
						<ProjectTabs {selectedTabState} />
						{#if selectedTabState.isSnapsSelected && project_store.project.is_owner}
							<ProjectEditActionsBar
								{isEditActive}
								on:toggleEditMode={toggle_edit_mode}
							/>
						{/if}
					</div>
					<div class="content_layout">
						{#if selectedTabState.isSnapsSelected}
							{#if isEmpty(project_store.project.snaps)}
								<CardEmpty
									name="snap_empty"
									content="No snaps found"
									view_size={{width: '64', height: '64'}}
								/>
							{/if}

							<!-- Snaps -->
							{#if project_store.project.snaps && project_store.project.snaps.length > 0}
								{#each project_store.project.snaps as snap (snap.id)}
									<SnapCard
										{snap}
										showEditMode={is_edit_active}
										on:clickCard={goto_snap_preview}
									/>
								{/each}
								{#if project_store.project.is_owner === true}
									<SnapCardCreate on:clickSnapCardCreate={goto_snap_create} />
								{/if}
							{/if}
						{/if}
					</div>
					<div class="feedback_layout">
						{#if selectedTabState.isFeedbackSelected}
							<Feedback
								project={project_store.project}
								on:send_message={send_message}
								on:accept_change={accept_change}
								on:reject_change={reject_change}
								on:remove_topic={remove_topic}
								on:select_topic={select_topic}
								on:select_file={select_file}
								on:download_file={download_file}
							/>
						{/if}
					</div>
				{/if}
			</div>
		</body>
	</html>
</main>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style>
	.grid_layout {
		position: relative;
		margin-left: 3rem;
		margin-right: 3rem;
		display: none;
		grid-template-columns: repeat(12, minmax(0, 1fr))
}
@media (min-width: 1024px) {
		.grid_layout {
				display: grid
		}
}
@media (min-width: 1536px) {
		.grid_layout {
				margin-left: 15rem;
				margin-right: 15rem
		}
}
	.navigation_main_layout {
		grid-column-start: 1;
		grid-column-end: 13;
		grid-row-start: 1;
		grid-row-end: auto
}
	.loading_layout {
		position: fixed;
		z-index: 30;
		top: 42%;
		left: 50%;
		transform: translate(-50%, -50%)
}
	.project_info_layout {
		position: relative;
		grid-column-start: 1;
		grid-column-end: 13;
		grid-row-start: 2;
		grid-row-end: auto
}
	.project_tabs_layout {
		grid-column-start: 1;
		grid-column-end: 13;
		grid-row-start: 3;
		grid-row-end: auto;
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		align-items: center;
		justify-content: space-between
}
	.content_layout {
		grid-column-start: 1;
		grid-column-end: 13;
		grid-row-start: 4;
		grid-row-end: auto;
		margin-bottom: 4rem;
		display: none;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		-moz-column-gap: 1.5rem;
		     column-gap: 1.5rem;
		row-gap: 3rem
}
	@media (min-width: 1024px) {
		.content_layout {
				display: grid
		}
}
	.feedback_layout {
		grid-column-start: 1;
		grid-column-end: 13;
		grid-row-start: 4;
		grid-row-end: auto;
		margin-bottom: 4rem;
		display: none;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		-moz-column-gap: 1.5rem;
		     column-gap: 1.5rem;
		row-gap: 3rem
}
	@media (min-width: 1024px) {
		.feedback_layout {
				display: grid
		}
}
</style>
