<script>
	import {onMount} from 'svelte';
	import ConversationTabs from './ConversationTabs.svelte';

	let contentDiv;
	let selectedTabState = {
		isConversationSelected: true,
		isChangesSelected: false
	};

	onMount(() => {
		let rect = contentDiv.getBoundingClientRect();
		document.documentElement.style.setProperty(
			'--current-offset',
			`${rect.top}px`
		);
	});
</script>

<div class="content" bind:this={contentDiv}>
	<ConversationTabs
		{selectedTabState}
		on:selectedTabState={e => {
			selectedTabState = {
				...e.detail
			};
		}}
	/>
</div>

<style lang="postcss">
	.content {
		@apply text-white bg-black-a h-full;
		position: relative;
		min-height: calc(94vh - var(--current-offset));
	}
</style>
