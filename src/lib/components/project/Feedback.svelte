<script>
	import {get} from 'lodash';
	import {createEventDispatcher, onMount} from 'svelte';
	const dispatch = createEventDispatcher();
	import {get_topic_by_id} from '../../utils/topics';

	import TopicSidebar from './TopicSidebar.svelte';
	import Conversation from './Conversation.svelte';

	export let project = {};
	const topics = get(project, 'feedback[0].topics', []);
	let selected_topic = get_topic_by_id(topics, get(topics, '[0].id', ''));
	let selected_topic_id = selected_topic.id || '';

	function remove_topic(event) {
		event.stopPropagation();

		dispatch('remove_topic', event);
	}

	function select_topic(event) {
		event.stopPropagation();

		selected_topic = {...selected_topic, ...event.detail.selected_topic};
		selected_topic_id = event.detail.selected_topic.id;

		console.log('Feedback: selected_topic: ', selected_topic);
		console.log('Feedback: selected_topic.id: ', selected_topic.id);

		dispatch('select_topic', event);
	}

	function select_file(event) {
		event.stopPropagation();

		dispatch('select_file', event);
	}

	function download_file(event) {
		event.stopPropagation();

		dispatch('download_file', event);
	}

	function accept_change(event) {
		event.stopPropagation();

		dispatch('accept_change', event);
	}

	function reject_change(event) {
		event.stopPropagation();

		dispatch('reject_change', event);
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
