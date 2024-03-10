<script>
	import {onMount, createEventDispatcher} from 'svelte';
	import {get} from 'lodash';
	import {get_topic_by_id, bytes_to_megabytes} from '../../utils/topics';
	import {format_time} from '../../utils/time';

	const dispatch = createEventDispatcher();

	import ConversationTabs from './ConversationTabs.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import Button from '../basic_elements/Button.svelte';

	export let topics = [];
	let selected_tab = 'conversation';

	let selected_topic_id = get(topics, '[0].id', '');
	let selected_topic = get_topic_by_id(topics, selected_topic_id);
	let is_change_pending =
		get(selected_topic, 'design_file', []).length > 0 || false;

	console.log('selected_topic: ', selected_topic);

	let design_file = get(selected_topic, 'design_file.[0]', {});
	let file_content_size = get(design_file, 'content_size', 0);
	const design_file_size = bytes_to_megabytes(file_content_size);
	const design_file_name = get(design_file, 'filename', '');

	let messages = get(selected_topic, 'messages', []);
	console.log('messages: ', messages);

	let contentDiv;
	let textarea;

	onMount(() => {
		let rect = contentDiv.getBoundingClientRect();
		document.documentElement.style.setProperty(
			'--current-offset',
			`${rect.top}px`
		);
	});

	function resize_text_area() {
		textarea.style.height = 'auto';

		const newHeight = Math.min(textarea.scrollHeight, window.innerHeight / 2);

		textarea.style.height = `${newHeight}px`;

		const actionBarHeight =
			conversationActionBar.getBoundingClientRect().height;
		conversationActionBar.style.bottom = `${
			window.innerHeight / 2 - actionBarHeight
		}px`;
	}

	function select_tab(event) {
		selected_tab = event.detail.selected_tab;
	}

	function reject_change(event) {
		dispatch('reject_change', event);
	}

	function accept_change(event) {
		dispatch('accept_change', event);
	}
</script>

<div class="content" bind:this={contentDiv}>
	<ConversationTabs
		{is_change_pending}
		{selected_tab}
		on:tab_change={select_tab}
	/>

	<!-- Changes -->
	{#if selected_tab === 'changes' && is_change_pending}
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
						size="4rem"
					/>
					<span>
						<p class="file_name">
							{design_file_name}
						</p>
						<p class="file_size">
							File size {design_file_size} MB
						</p>
					</span>
				</span>
				<span>
					<Button label="Download" />
				</span>
			</span>
			<span class="decision">
				<button class="reject" on:click={reject_change}>Reject</button>
				<button class="accept" on:click={accept_change}>Accept</button>
			</span>
		</div>
	{/if}

	<!-- Conversation -->
	{#if selected_tab === 'conversation'}
		<div class="conversation">
			<div class="messages_container">
				{#each messages as message}
					<div class="message">
						<div class="message_info">
							<p class="message_info_username">{message.username}</p>
							<p class="message_info_created">{format_time(message.created)}</p>
						</div>

						<div class="message_content">
							<p>{message.content}</p>
						</div>
					</div>
				{/each}
			</div>
			<div class="conversation_action_bar">
				<textarea
					bind:this={textarea}
					on:input={resize_text_area}
					type="text"
					class="message_input"
					placeholder="Type a message"
				/>

				<Icon
					class="fill_dark_grey"
					name="attach_design_file"
					clickable={true}
					viewSize={{
						width: '55',
						height: '55'
					}}
					size="3rem"
				/>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.content {
		@apply relative text-white bg-black-a font-sans rounded-md;
		min-height: calc(94vh - var(--current-offset));
	}
	.warning {
		@apply mt-6 px-10 text-warning-yellow;
	}
	.conversation {
		@apply mx-auto max-w-3xl;
	}
	.file {
		@apply px-10 mt-8 mr-6 flex flex-row justify-between;
	}
	.file_name {
		@apply font-bold;
	}
	.file_size {
		@apply text-xs;
	}
	.info_container {
		@apply flex flex-row gap-24;
	}
	.info {
		@apply flex flex-row gap-4 items-center;
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
	.message {
		@apply mb-4 last:mb-4;
	}
	.message_info {
		@apply flex flex-row gap-4 items-center;
	}
	.message_info_username {
		@apply font-bold text-white;
	}
	.message_info_created {
		@apply font-bold text-xs text-mist-grey;
	}
	.message_content {
		@apply flex;
	}
	.message_content p {
		@apply p-4;
	}
	.conversation_action_bar {
		@apply sticky bottom-0 flex items-end bg-black-a p-4;
	}
	.message_input {
		@apply flex-grow bg-dark-grey rounded-lg text-mist-grey resize-none overflow-y-auto px-8 py-2 mr-10;
		max-height: 50vh;
		line-height: 1.5;
	}
	::placeholder {
		@apply text-center;
	}
</style>
