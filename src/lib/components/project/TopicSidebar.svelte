<script>
	import {get} from 'lodash';
	import Icon from '../basic_elements/Icon.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let topics = [];

	const buttonText = topic => {
		let text = `# ${get(topic, 'snap.name', '')} / ${get(topic, 'name', '')}`;
		return text.length > 15 ? text.substring(0, 30) + ' ...' : text;
	};

	function handleOptionsClick(event) {
		event.stopPropagation();

		dispatch('options', event);
	}

	function handleTopicClick(event) {
		dispatch('topic', event);
	}
</script>

<div class="content">
	<h1 class="header">Topics</h1>

	{#each topics as topic}
		<button class="button" on:click={handleTopicClick}>
			<p>
				{buttonText(topic)}
			</p>
			<Icon
				class="cursor_pointer fill_white hover_bubble_purple"
				name="options_h"
				size="1.5rem"
				on:click={handleOptionsClick}
				viewSize={{width: '28', height: '9'}}
			/>
		</button>
	{/each}
</div>

<style lang="postcss">
	.header {
		@apply font-sans text-xl font-bold mb-6;
	}
	.button {
		@apply flex flex-row justify-between bg-dark-grey hover:bg-black-a px-3 py-3 w-full rounded mb-2;
	}
</style>
