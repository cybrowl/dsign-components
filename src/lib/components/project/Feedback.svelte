<script>
	import {get} from 'lodash';

	import TopicSidebar from './TopicSidebar.svelte';
	import Conversation from './Conversation.svelte';

	export let project = {};
	const topics = get(project, 'feedback[0].topics', []);

	console.log('project: ', project);
	console.log('topics: ', topics);

	function remove_topic(event) {
		event.stopPropagation();

		dispatch('remove_topic', event);
	}

	function select_topic(event) {
		event.stopPropagation();

		dispatch('select_topic', event);
	}

	function accept_change(event) {
		dispatch('accept_change', event);
	}

	function reject_change(event) {
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
	<Conversation
		{topics}
		on:accept_change={accept_change}
		on:reject_change={reject_change}
	/>
</div>

<style lang="postcss">
	.topic_sidebar {
		@apply col-start-1 col-end-4 text-cloud-purple;
	}
	.conversation {
		@apply col-start-4 col-end-13;
	}
</style>
