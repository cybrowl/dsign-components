<script>
	import Login from '../components/login/Login.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';
	import SnapActionsBar from '../components/snap/SnapActionsBar.svelte';
	import SnapInfo from '../components/snap/SnapInfo.svelte';

	import SnapFeedbackModal from '../modals/SnapFeedbackModal.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let modal_visible = {};

	export const avatar = '';
	export const username = '';
	export let snap = {};
	export let project_name = '';
	export let is_authenticated = false;
	export let is_owner = false;
	export let navigationItems;
	export let my_profile = {};

	function handleBackHistory() {
		dispatch('backHistory');
	}

	function handleClickEdit() {
		dispatch('edit');
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

				<!-- Modals -->
				{#if modal_visible.snap_feedback}
					<SnapFeedbackModal {snap} />
				{/if}

				<div class="snap_info_layout">
					<SnapInfo
						{project_name}
						{snap}
						{is_owner}
						on:edit={handleClickEdit}
					/>
				</div>

				<div class="content_layout">
					{#each snap.images as image}
						<img src={image.url} alt="" />
					{/each}
				</div>

				<div class="actions_bar_layout">
					<SnapActionsBar
						{snap}
						{is_authenticated}
						on:clickBack={handleBackHistory}
					/>
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
		@apply hidden lg:grid grid-cols-12 gap-y-2 mx-12 2xl:mx-60;
	}
	.navigation_main_layout {
		@apply row-start-1 row-end-auto col-start-1 col-end-13;
	}
	.snap_info_layout {
		@apply row-start-2 row-end-auto col-start-1 col-end-13 mb-10;
	}
	.content_layout {
		@apply row-start-3 row-end-auto col-start-1 col-end-12 mb-10 flex flex-col items-center;
	}
	.content_layout img {
		@apply pb-10 max-w-full;
	}
	.actions_bar_layout {
		@apply row-start-3 row-end-auto col-start-12 col-end-13 mb-10 flex justify-center;
	}
</style>
