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
	export let is_change_pending = false;
	export let selectedTabState = {};

	console.log('project_store: ', project_store);

	function deselectAllSnaps(snaps) {
		return map(snaps, snap => ({...snap, isSelected: false}));
	}

	function handleToggleEditMode(event) {
		isEditActive = !isEditActive;

		const deselected_snaps = deselectAllSnaps(project.snaps);

		project = {...project, snaps: deselected_snaps};
	}

	function handleClickCard(event) {
		console.log('clickCard');
	}

	function goto_snap_preview(event) {}

	function goto_snap_create(event) {}
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
								on:toggleEditMode={handleToggleEditMode}
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
							<Feedback project={project_store.project} {is_change_pending} />
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

<style lang="postcss">
	.grid_layout {
		@apply hidden lg:grid grid-cols-12 relative mx-12 2xl:mx-60;
	}
	.navigation_main_layout {
		@apply row-start-1 row-end-auto col-start-1 col-end-13;
	}
	.loading_layout {
		@apply fixed z-30;
		top: 42%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.project_info_layout {
		@apply row-start-2 row-end-auto relative col-start-1 col-end-13;
	}
	.project_tabs_layout {
		@apply row-start-3 row-end-auto col-start-1 col-end-13 items-center justify-between mt-12 mb-6;
	}
	.content_layout {
		@apply row-start-4 row-end-auto hidden lg:grid grid-cols-4 col-start-1 col-end-13 gap-x-6 gap-y-12 mb-16;
	}
	.feedback_layout {
		@apply row-start-4 row-end-auto hidden lg:grid grid-cols-12 col-start-1 col-end-13 gap-x-6 gap-y-12 mb-16;
	}
</style>
