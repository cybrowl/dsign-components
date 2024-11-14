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

<style>
	.grid_layout {
    margin-left: 3rem;
    margin-right: 3rem;
    display: none;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    row-gap: 0.5rem
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
	.snap_info_layout {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 2;
    grid-row-end: auto;
    margin-bottom: 2.5rem
}
	.content_layout {
    grid-column-start: 1;
    grid-column-end: 12;
    grid-row-start: 3;
    grid-row-end: auto;
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center
}
	.content_layout img {
    max-width: 100%;
    padding-bottom: 2.5rem
}
	.actions_bar_layout {
    grid-column-start: 12;
    grid-column-end: 13;
    grid-row-start: 3;
    grid-row-end: auto;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center
}
</style>
