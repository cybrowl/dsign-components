<script>
	import {get} from 'lodash';
	import {createEventDispatcher, onMount} from 'svelte';
	const dispatch = createEventDispatcher();
	import {get_topic_by_id} from '../../utils/topics';

	import TopicSidebar from './TopicSidebar.svelte';
	import Conversation from './Conversation.svelte';

	export let project = {};
	export let selected_topic_id = '';

	const topics = get(project, 'feedback.topics[0]', []);

	let selected_topic = get_topic_by_id(topics, selected_topic_id);

	function remove_topic(event) {
		event.stopPropagation();

		dispatch('remove_topic', event.detail);
	}

	function select_topic(event) {
		event.stopPropagation();

		selected_topic = {...selected_topic, ...event.detail.selected_topic};
		selected_topic_id = event.detail.selected_topic.id;

		dispatch('select_topic', event.detail);
	}

	function select_file(event) {
		event.stopPropagation();

		dispatch('select_file', event.detail);
	}

	function send_message(event) {
		event.stopPropagation();

		dispatch('send_message', event.detail);
	}

	function download_file(event) {
		event.stopPropagation();

		dispatch('download_file', event.detail);
	}

	function accept_change(event) {
		event.stopPropagation();

		dispatch('accept_change', selected_topic);
	}

	function reject_change(event) {
		event.stopPropagation();

		dispatch('reject_change', selected_topic);
	}
</script>

<div class="topic_sidebar">
	<TopicSidebar
		{topics}
		on:remove_topic={remove_topic}
		on:select_topic={select_topic}
	/>
</div>

<div class="conversation">
	{#if topics.length > 0}
		<Conversation
			key={selected_topic_id}
			{selected_topic}
			on:send_message={send_message}
			on:accept_change={accept_change}
			on:reject_change={reject_change}
			on:select_file={select_file}
			on:download_file={download_file}
		/>
	{/if}
</div>

<style lang="postcss">
	.topic_sidebar {
		@apply col-start-1 col-end-4 text-cloud-purple;
	}
	.conversation {
		@apply col-start-4 col-end-13;
	}
</style>
