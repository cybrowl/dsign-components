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

<style>
	.tabs_container {
    display: flex;
    cursor: pointer;
    gap: 1rem;
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
    padding-bottom: 0.25rem;
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
</style>
