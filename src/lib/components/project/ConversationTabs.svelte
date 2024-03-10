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

<style lang="postcss">
	.tabs_container {
		@apply font-sans flex p-4 gap-4 cursor-pointer text-white text-sm;
	}
	.selected {
		@apply text-bubble-purple border-solid border-b-4 pb-1 border-bubble-purple;
	}
</style>
