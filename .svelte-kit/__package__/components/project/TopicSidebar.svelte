<script>
	import {get} from 'lodash';
	import Icon from '../basic_elements/Icon.svelte';
	import {createEventDispatcher} from 'svelte';
	import {get_topic_by_id, truncate_text} from '../../utils/topics';

	const dispatch = createEventDispatcher();

	export let topics = [];
	export let selected_topic = {
		id: ''
	};
	export let is_owner = false;

	//TODO: id can come from query param to select
	// let selected_topic_id = get(topics, '[0].id', '');
	// let selected_topic = get_topic_by_id(topics, selected_topic_id);

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
				class:selected={topic.id === selected_topic.id}
				on:click={event => select_topic(event, topic.id)}
			>
				<p alt="topic_name">
					{truncate_text(get(topic, 'snap_name', ''), 20)}
				</p>

				{#if is_owner === true}
					<Icon
						class="cursor_pointer fill_dark_grey hover_tulip_purple"
						name="trash"
						size="1.5rem"
						on:click={event => remove_topic(event, topic.id)}
						viewSize={{width: '40', height: '40'}}
					/>
				{/if}
			</button>
		{/each}
	{/if}
</div>

<style>
	.content {
    height: 100%;
    flex-direction: column;
    font-family: Roboto, sans-serif
}
	.header {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700
}
	.button {
    margin-bottom: 0.5rem;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0.25rem;
    --tw-bg-opacity: 1;
    background-color: rgb(33 32 41 / var(--tw-bg-opacity));
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem
}
	.button:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(69 67 82 / var(--tw-bg-opacity))
}
	.button.selected {
    --tw-bg-opacity: 1;
    background-color: rgb(69 67 82 / var(--tw-bg-opacity))
}
	.no_topics_container {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center
}
	.no_topics {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(90 88 102 / var(--tw-text-opacity))
}
</style>
