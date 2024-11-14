<script>
	import {onMount, createEventDispatcher} from 'svelte';
	import {bytes_to_megabytes} from '../../utils/topics';
	import {format_time} from '../../utils/time';

	const dispatch = createEventDispatcher();

	import ConversationTabs from './ConversationTabs.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import Button from '../basic_elements/Button.svelte';

	export let selected_topic = {};
	export let is_owner = false;

	// Reactive declarations for properties derived from selected_topic
	$: is_change_pending = selected_topic.design_file?.length > 0;
	$: design_file = selected_topic.design_file?.[0] ?? {};
	$: design_file_size = bytes_to_megabytes(design_file.content_size ?? 0);
	$: design_file_name = design_file.name ?? '';
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
		{#if is_owner === true}
			<div class="warning">
				Accept or reject file before another file can be added.
			</div>
		{/if}
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
			{#if is_owner === true}
				<span class="decision">
					<button class="reject" on:click={reject_change}>Reject</button>
					<button class="accept" on:click={accept_change}>Accept</button>
				</span>
			{/if}
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
					{#if design_file_name === ''}
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
					{/if}

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

<style>
	.content {
		position: relative;
		border-radius: 0.375rem;
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity));
		padding-bottom: 5rem;
		font-family: Roboto, sans-serif;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.warning {
		margin-top: 1.5rem;
		padding-left: 2.5rem;
		padding-right: 2.5rem;
		--tw-text-opacity: 1;
		color: rgb(255 240 161 / var(--tw-text-opacity))
}
	.conversation {
		margin-left: auto;
		margin-right: auto;
		max-width: 48rem
}
	.file {
		margin-top: 2rem;
		margin-right: 1.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-left: 2.5rem;
		padding-right: 2.5rem
}
	.file_name {
		font-weight: 700
}
	.file_size {
		font-size: 0.75rem;
		line-height: 1rem
}
	.info_container {
		display: flex;
		flex-direction: row;
		gap: 6rem
}
	.info {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem
}
	.decision {
		display: flex;
		gap: 1rem
}
	.reject {
		--tw-text-opacity: 1;
		color: rgb(255 161 178 / var(--tw-text-opacity))
}
	.accept {
		--tw-text-opacity: 1;
		color: rgb(182 175 252 / var(--tw-text-opacity))
}
	.message {
		margin-bottom: 1rem
}
	.message:last-child {
		margin-bottom: 1rem
}
	.message_info {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem
}
	.message_info_username {
		font-weight: 700;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.message_info_created {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 700;
		--tw-text-opacity: 1;
		color: rgb(177 176 184 / var(--tw-text-opacity))
}
	.message_content {
		display: flex
}
	.message_content p {
		padding: 1rem
}
	.conversation_action_bar {
		position: sticky;
		bottom: 0px;
		display: flex;
		align-items: flex-end;
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity));
		padding: 1rem
}
	.conversation_action_bar_buttons {
		display: flex;
		align-items: center;
		gap: 0.5rem
}
	.message_input {
		margin-right: 2.5rem;
		flex-grow: 1;
		resize: none;
		overflow-y: auto;
		border-radius: 0.5rem;
		--tw-bg-opacity: 1;
		background-color: rgb(50 49 61 / var(--tw-bg-opacity));
		padding-left: 2rem;
		padding-right: 2rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		--tw-text-opacity: 1;
		color: rgb(177 176 184 / var(--tw-text-opacity));
		max-height: 50vh;
		line-height: 1.5
}
	::-moz-placeholder {
		text-align: center
}
	::placeholder {
		text-align: center
}
	.file_input {
		visibility: hidden;
		position: absolute;
		height: 0px;
		width: 0px
}
</style>
