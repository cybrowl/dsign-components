<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let selected_tab = 'conversation';
	export let is_change_pending = false;

	function select_tab(tab) {
		selected_tab = tab;
		dispatch('tab_change', {selected_tab: tab});
	}
</script>

<div class="tabs_container">
	<span
		class:selected={selected_tab === 'conversation'}
		on:click={() => select_tab('conversation')}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}
		role="button"
		tabindex="0">Conversation</span
	>

	{#if is_change_pending}
		<span
			class:selected={selected_tab === 'changes'}
			on:click={() => select_tab('changes')}
			on:keypress={e => {
				//TODO: need to design how this will work for A11y
			}}
			role="button"
			tabindex="0">Changes</span
		>
	{/if}
</div>

<style>
	.tabs_container {
    display: flex;
    cursor: pointer;
    gap: 1rem;
    padding: 1rem;
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
