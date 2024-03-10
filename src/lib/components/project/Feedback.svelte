<script>
	import {get} from 'lodash';

	import TopicSidebar from './TopicSidebar.svelte';
	import Conversation from './Conversation.svelte';

	export let project = {};
	export let is_change_pending;
	const selectedTopic = false;

	console.log('project: ', project);
	const topics = get(project, 'feedback[0].topics', []);
	console.log('topics: ', topics);
</script>

<div class="topic_sidebar">
	<TopicSidebar {topics} />
</div>

<div class="conversation">
	<Conversation {is_change_pending} {selectedTopic} />
</div>

<style lang="postcss">
	.topic_sidebar {
		@apply col-start-1 col-end-4 text-cloud-purple;
	}
	.conversation {
		@apply col-start-4 col-end-13;
	}
</style>
