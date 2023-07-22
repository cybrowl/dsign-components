<script>
	import TopicSidebar from './TopicSidebar.svelte';

	export let topics = [];
</script>

<div>
	<div class="topic_sidebar">
		<TopicSidebar {topics} />
	</div>
</div>

<style lang="postcss">
	.topic_sidebar {
		@apply flex flex-col text-cloud-purple;
	}
</style>
