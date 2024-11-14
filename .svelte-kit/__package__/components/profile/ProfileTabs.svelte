<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let profileTabsState = {
		isFavoritesSelected: false,
		isProjectsSelected: false
	};

	function selectProjectsTab() {
		dispatch('selectProjectsTab', {
			isProjectsSelected: true,
			isFavoritesSelected: false
		});
	}

	function selectFavoritesTab() {
		dispatch('selectFavoritesTab', {
			isFavoritesSelected: true,
			isProjectsSelected: false
		});
	}
</script>

<div class="profileTabsContainer">
	<span
		class={profileTabsState.isProjectsSelected ? 'selected' : ''}
		on:click={selectProjectsTab}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}
		role="button"
		tabindex="0">Projects</span
	>

	<span
		class={profileTabsState.isFavoritesSelected ? 'selected' : ''}
		on:click={selectFavoritesTab}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}
		role="button"
		tabindex="0">Favorites</span
	>
</div>

<style>
	.profileTabsContainer {
    display: flex;
    cursor: pointer;
    -moz-column-gap: 1rem;
         column-gap: 1rem;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.selected {
    border-bottom-width: 4px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(182 175 252 / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
</style>
