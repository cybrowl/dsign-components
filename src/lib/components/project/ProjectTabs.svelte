<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let selected_tab = 'snaps';

	function select_tab(tab) {
		selected_tab = tab;
		dispatch('tabSelected', {selected_tab: tab});
	}
</script>

<div class="tabs_container">
	<span
		class:selected={selected_tab === 'snaps'}
		on:click={() => select_tab('snaps')}
		on:keypress={e => {
			// Implement keyboard accessibility here
		}}
		role="button"
		tabindex="0">Snaps</span
	>

	<span
		class:selected={selected_tab === 'feedback'}
		on:click={() => select_tab('feedback')}
		on:keypress={e => {
			// Implement keyboard accessibility here
		}}
		role="button"
		tabindex="0">Feedback</span
	>
</div>

<style lang="postcss">
	.tabs_container {
		@apply font-sans flex gap-4 cursor-pointer text-white text-sm;
	}
	.selected {
		@apply text-bubble-purple border-solid border-b-4 pb-1 border-bubble-purple;
	}
</style>
