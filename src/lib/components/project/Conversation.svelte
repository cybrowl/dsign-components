<script>
	import {onMount, createEventDispatcher} from 'svelte';
	import {bytes_to_megabytes} from '../../utils/topics';
	import {format_time} from '../../utils/time';

	const dispatch = createEventDispatcher();

	import ConversationTabs from './ConversationTabs.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import Button from '../basic_elements/Button.svelte';

	export let selected_topic = {};

	// Reactive declarations for properties derived from selected_topic
	$: is_change_pending = selected_topic.design_file?.length > 0;
	$: design_file = selected_topic.design_file?.[0] ?? {};
	$: design_file_size = bytes_to_megabytes(design_file.content_size ?? 0);
	$: design_file_name = design_file.filename ?? '';
	$: messages = selected_topic.messages ?? [];

	let selected_tab = 'conversation';
	let content_div;
	let textarea;

	let file_input_elem;
	let file_too_large = false;
	let file;

	onMount(() => {
		adjust_content_offset();
	});

	function adjust_content_offset() {
		const rect = content_div.getBoundingClientRect();
		document.documentElement.style.setProperty(
			'--current-offset',
			`${rect.top}px`
		);
	}

	function resize_text_area() {
		textarea.style.height = 'auto';

		const newHeight = Math.min(textarea.scrollHeight, window.innerHeight / 2);

		textarea.style.height = `${newHeight}px`;
	}

	function select_tab(event) {
		selected_tab = event.detail.selected_tab;
	}

	function send_message() {
		dispatch('send_message', {content: textarea.value});
	}

	function trigger_file_selection(e) {
		file_input_elem.click();
	}

	function select_file(e) {
		const max_file_size = 25 * 1024 * 1024;

		file = e.target.files[0];

		if (file.size > max_file_size) {
			file_too_large = true;
			dispatch('err', {message: 'file_too_large'});
		} else {
			file_too_large = false;

			dispatch('select_file', file);
		}

		e.target.value = '';
	}

	function download_file() {
		const designFile = selected_topic.design_file?.[0];
		if (designFile && designFile.url) {
			console.log(`Attempting to download file from: ${designFile.url}`);
			const link = document.createElement('a');
			link.href = designFile.url;
			link.click();
			link.remove();
		} else {
			console.log('Design file URL or file is not available');
		}
	}

	function reject_change(event) {
		dispatch('reject_change', event);
	}

	function accept_change(event) {
		dispatch('accept_change', event);
	}
</script>

<div class="content" bind:this={content_div}>
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
					<Button label="Download" on:click={download_file} />
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

				<span class="conversation_action_bar_buttons">
					<Icon
						class="fill_dark_grey"
						name="attach_design_file"
						clickable={true}
						on:click={trigger_file_selection}
						viewSize={{
							width: '55',
							height: '55'
						}}
						size="2.5rem"
					/>

					<Button label="Send" on:click={send_message} />
				</span>
			</div>
		</div>
	{/if}

	<!-- File upload input (hidden) -->
	<input
		class="file_input"
		type="file"
		accept=".fig"
		on:change={e => select_file(e)}
		bind:this={file_input_elem}
	/>
</div>

<style lang="postcss">
	.content {
		@apply relative text-white bg-black-a font-sans rounded-md pb-20;
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
	.conversation_action_bar_buttons {
		@apply flex items-center gap-2;
	}
	.message_input {
		@apply flex-grow bg-dark-grey rounded-lg text-mist-grey resize-none overflow-y-auto px-8 py-2 mr-10;
		max-height: 50vh;
		line-height: 1.5;
	}
	::placeholder {
		@apply text-center;
	}
	.file_input {
		@apply invisible w-0 h-0 absolute;
	}
</style>
