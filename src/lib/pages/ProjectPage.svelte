<script>
	import Avatar from '../components/basic_elements/Avatar.svelte';
	import Button from '../components/basic_elements/Button.svelte';
	import Icon from '../components/basic_elements/Icon.svelte';

	import SnapCard from '../components/cards/SnapCard.svelte';
	import SnapCardCreate from '../components/cards/SnapCardCreate.svelte';
	import CardEmpty from '../components/cards/CardEmpty.svelte';

	// import Notification from '../components/Notification.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';

	import ProjectTabs from '../components/project/ProjectTabs.svelte';
	import ProjectInfo from '../components/project/ProjectInfo.svelte';
	import ProjectEditActionsBar from '../components/project/ProjectEditActionsBar.svelte';
	import ComingSoon from '../components/project/ComingSoon.svelte';

	import {createEventDispatcher} from 'svelte';
	import {isEmpty, get, map, set} from 'lodash';
	const dispatch = createEventDispatcher();

	// export let avatar = '';
	export let avatar_nav = '';
	export let username = '';
	export let is_authenticated = false;
	export let project = {};
	export let is_owner = false;
	export let isEditActive = false;
	export const navigationItems = [];
	// export let showOptionsPopover = false;
	export let selectedTabState = {};

	function deselectAllSnaps(snaps) {
		return map(snaps, snap => ({...snap, isSelected: false}));
	}

	function handleToggleEditMode(e) {
		isEditActive = get(e, 'detail', false);

		const deselected_snaps = deselectAllSnaps(project.snaps);

		project = {...project, snaps: deselected_snaps};
	}
</script>

<main>
	<html lang="en" class="dark">
		<body>
			<div class="grid_layout">
				<div class="navigation_main_layout">
					<PageNavigation {navigationItems}>
						<span>
							{#if is_authenticated}
								<Avatar avatar={avatar_nav} {username} />
								<Icon
									name="settings"
									size="2.75rem"
									class="cursor_pointer fill_dark_grey hover_smoky_grey"
									viewSize={{
										width: '44',
										height: '44'
									}}
								/>
							{:else}
								<Button primary={true} label="Connect" />
							{/if}
						</span>
					</PageNavigation>
				</div>
				<div class="project_info_layout">
					<ProjectInfo {project} />
				</div>
				<div class="project_tabs_layout">
					<ProjectTabs {selectedTabState} />
					{#if selectedTabState.isSnapsSelected && is_owner}
						<ProjectEditActionsBar
							{isEditActive}
							on:toggleEditMode={handleToggleEditMode}
						/>
					{/if}
				</div>
				<div class="snaps_layout">
					{#if selectedTabState.isSnapsSelected}
						{#if isEmpty(project.snaps)}
							<CardEmpty
								name="snap_empty"
								content="No snaps found"
								view_size={{width: '64', height: '64'}}
							/>
						{/if}
						{#each project.snaps as snap}
							<SnapCard {snap} isEditMode={isEditActive} />
						{/each}

						{#if is_owner && isEditActive === false}
							<SnapCardCreate
								on:clickSnapCardCreate={() => console.log('route /snap/upsert')}
							/>
						{/if}
					{/if}
					{#if selectedTabState.isRecsSelected}
						<div class="coming_soon_layout">
							<ComingSoon />
						</div>
					{/if}
				</div>
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
		@apply hidden lg:grid grid-cols-12 relative ml-12 mr-12;
	}
	.navigation_main_layout {
		@apply col-start-1 col-end-13 row-start-1 row-end-auto;
	}
	.navigation_main_layout span {
		@apply flex gap-x-3 cursor-pointer;
	}
	.project_info_layout {
		@apply relative col-start-1 col-end-13 row-start-2 row-end-auto;
	}
	.project_tabs_layout {
		@apply col-start-1 col-end-13 items-center justify-between row-start-3 row-end-auto mt-12 mb-6;
	}
	.snaps_layout {
		@apply hidden lg:grid grid-cols-4 row-start-4 row-end-auto col-start-1 col-end-13 gap-x-6 gap-y-12 mb-16;
	}
	.coming_soon_layout {
		@apply grid col-start-3 col-end-13 row-start-4 row-end-auto;
	}
</style>
