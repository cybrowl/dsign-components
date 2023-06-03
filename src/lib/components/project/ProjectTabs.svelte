<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let selectedTabState = {
		isFeedbackSelected: false,
		isSnapsSelected: false
	};

	export let deselectedTabState = {
		isFeedbackSelected: false,
		isSnapsSelected: false
	};

	function selectSnapsTab() {
		dispatch('selectSnapsTab', {
			...deselectedTabState,
			isSnapsSelected: true
		});
	}

	function selectFeedbackTab() {
		dispatch('selectFeedbackTab', {
			...deselectedTabState,
			isFeedbackSelected: true
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
		class={selectedTabState.isFeedbackSelected ? 'selected' : ''}
		on:click={selectFeedbackTab}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}>Feedback</span
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
