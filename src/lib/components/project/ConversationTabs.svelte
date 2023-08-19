<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let selectedTabState = {
		isConversationSelected: true,
		isChangesSelected: false
	};

	export let deselectedTabState = {
		isConversationSelected: false,
		isChangesSelected: false
	};

	function selectChangesTab() {
		dispatch('selectedTabState', {
			...deselectedTabState,
			isChangesSelected: true
		});
	}

	function selectConversationTab() {
		dispatch('selectedTabState', {
			...deselectedTabState,
			isConversationSelected: true
		});
	}
</script>

<div class="tabsContainer">
	<span
		class={selectedTabState.isConversationSelected ? 'selected' : ''}
		on:click={selectConversationTab}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}>Conversation</span
	>

	<span
		class={selectedTabState.isChangesSelected ? 'selected' : ''}
		on:click={selectChangesTab}
		on:keypress={e => {
			//TODO: need to design how this will work for A11y
		}}>Changes</span
	>
</div>

<style lang="postcss">
	.tabsContainer {
		@apply font-sans flex p-4 gap-4 cursor-pointer text-white text-sm;
	}
	.selected {
		@apply text-bubble-purple border-solid border-b-4 pb-1 border-bubble-purple;
	}
</style>
