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

<style lang="postcss">
	.profileTabsContainer {
		@apply flex font-sans gap-x-4 cursor-pointer text-white text-sm;
	}
	.selected {
		@apply text-bubble-purple border-solid border-b-4 border-bubble-purple;
	}
</style>
