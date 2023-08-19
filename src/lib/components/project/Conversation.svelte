<script>
	import {onMount, createEventDispatcher} from 'svelte';
	import {get} from 'lodash';

	const dispatch = createEventDispatcher();

	import ConversationTabs from './ConversationTabs.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import Button from '../basic_elements/Button.svelte';

	export let is_change_pending = false;
	export let selectedTopic = {};
	export let selectedTabState = {
		isConversationSelected: true,
		isChangesSelected: false
	};

	let contentDiv;

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

	{#if selectedTabState.isChangesSelected && is_change_pending}
		<div class="warning">
			Accept or reject file before another file can be added.
		</div>
		<div class="file">
			<span class="info_container">
				<span class="info">
					<Icon
						class="fill_dark_grey"
						name="attach_design_file"
						clickable={false}
						viewSize={{
							width: '55',
							height: '55'
						}}
						size="3rem"
					/>
					<span>
						<p>
							{get(selectedTopic, 'file.name', '')}
						</p>
						<p>
							File size {get(selectedTopic, 'file.size', '')} MB
						</p>
					</span>
				</span>
				<span>
					<Button
						label="Download"
						on:click={dispatch('download', selectedTopic)}
					/>
				</span>
			</span>
			<span class="decision">
				<button class="reject" on:click={dispatch('reject', selectedTopic)}
					>Reject</button
				>
				<button class="accept" on:click={dispatch('accept', selectedTopic)}
					>Accept</button
				>
			</span>
		</div>
	{/if}
</div>

<style lang="postcss">
	.content {
		@apply text-white bg-black-a h-full;
		position: relative;
		min-height: calc(94vh - var(--current-offset));
	}
	.warning {
		@apply pl-4 text-warning-yellow;
	}
	.file {
		@apply pl-4 mt-4 mr-6 flex flex-row justify-between;
	}
	.info_container {
		@apply flex flex-row gap-24;
	}
	.info {
		@apply flex flex-row gap-4;
	}
	.decision {
		@apply flex gap-4;
	}
	.reject {
		@apply text-reject-red;
	}
	.accept {
		@apply text-bubble-purple;
	}
</style>
