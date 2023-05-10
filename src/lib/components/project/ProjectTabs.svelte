<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let selectedTabState = {
		isChangesSelected: false,
		isRecsSelected: false,
		isSnapsSelected: false
	};

	export let deselectedTabState = {
		isChangesSelected: false,
		isRecsSelected: false,
		isSnapsSelected: false
	};

	function selectSnapsTab() {
		dispatch('selectSnapsTab', {
			...deselectedTabState,
			isSnapsSelected: true
		});
	}

	function selectRecsTab() {
		dispatch('selectRecsTab', {
			...deselectedTabState,
			isRecsSelected: true
		});
	}

	function selectChangesTab() {
		dispatch('selectChangesTab', {
			...deselectedTabState,
			isChangesSelected: true
		});
	}
</script>

<div class="tabsContainer">
	<span
		class={selectedTabState.isSnapsSelected ? 'selected' : ''}
		on:click={selectSnapsTab}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}>Snaps</span
	>

	<span
		class={selectedTabState.isChangesSelected ? 'selected' : ''}
		on:click={selectChangesTab}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}>Changes</span
	>

	<span
		class={selectedTabState.isRecsSelected ? 'selected' : ''}
		on:click={selectRecsTab}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}>Recs</span
	>
</div>

<style lang="postcss">
	.tabsContainer {
		@apply font-sans flex gap-4 float-left cursor-pointer text-white text-sm;
	}
	.selected {
		@apply text-bubble-purple border-solid border-b-4 pb-1 border-bubble-purple;
	}
</style>
