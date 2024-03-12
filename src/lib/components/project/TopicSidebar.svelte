<script>
	import {get} from 'lodash';
	import Icon from '../basic_elements/Icon.svelte';
	import {createEventDispatcher} from 'svelte';
	import {get_topic_by_id, truncate_text} from '../../utils/topics';

	const dispatch = createEventDispatcher();

	export let topics = [];
	export let selected_topic_id = '';

	//TODO: id can come from query param to select
	// let selected_topic_id = get(topics, '[0].id', '');
	let selected_topic = get_topic_by_id(topics, selected_topic_id);

	// TODO: write function given the id select topic from topics

	function remove_topic(event, topic_id) {
		event.stopPropagation();
		dispatch('remove_topic', {topic_id});
	}

	function select_topic(event, topic_id) {
		event.stopPropagation();
		// selected_topic_id = topic_id;

		selected_topic = get_topic_by_id(topics, topic_id);

		console.log('selected_topic: ', selected_topic);

		dispatch('select_topic', {selected_topic, topic_id});
	}
</script>

<div class="content">
	<h1 class="header">Topics</h1>

	{#if topics.length === 0}
		<div class="no_topics_container">
			<p class="no_topics">No Topics</p>
		</div>
	{:else}
		{#each topics as topic}
			<button
				class="button"
				class:selected={topic.id === selected_topic_id}
				on:click={event => select_topic(event, topic.id)}
			>
				<p alt="topic_name">
					{truncate_text(get(topic, 'snap_name', ''), 20)}
				</p>
				<Icon
					class="cursor_pointer fill_dark_grey hover_tulip_purple"
					name="trash"
					size="1.5rem"
					on:click={event => remove_topic(event, topic.id)}
					viewSize={{width: '40', height: '40'}}
				/>
			</button>
		{/each}
	{/if}
</div>

<style lang="postcss">
	.content {
		@apply font-sans flex-col h-full;
	}
	.header {
		@apply text-xl font-bold mb-6;
	}
	.button {
		@apply flex flex-row justify-between bg-black-a hover:bg-smoky-grey px-3 py-3 w-full rounded mb-2;
	}
	.button.selected {
		@apply bg-smoky-grey;
	}
	.no_topics_container {
		@apply flex justify-center items-center h-full;
	}
	.no_topics {
		@apply text-grey text-2xl font-bold;
	}
</style>
