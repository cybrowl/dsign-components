<script>
	import Input from './AddTagsInput.svelte';
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let tags_added = [];

	function handleOnEnter(e) {
		const value = e.detail.trim();

		tags_added = [...new Set([...tags_added, value])];
		dispatch('update', tags_added);
	}

	function handleTagDelete(index) {
		tags_added = [...tags_added];
		tags_added.splice(index, 1);
		dispatch('update', tags_added);
	}
</script>

<div class="add_tags">
	<h2>All tags</h2>
	<Input
		length={{
			mix: 1,
			max: 40
		}}
		on:enter={handleOnEnter}
	/>
	<div class="tags_added">
		{#each tags_added as tag, index (tag)}
			<div>
				<span
					class="tag_delete"
					on:click={() => handleTagDelete(index)}
					on:keypress={e => {
						//TODO: need to design how this will work A11y
					}}
					role="button"
					tabindex="0">X</span
				>
				<span>{tag}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.add_tags h2 {
    margin-bottom: 1.5rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(177 176 184 / var(--tw-text-opacity))
}
	.tags_added {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
	.tag_delete {
    cursor: pointer;
    --tw-text-opacity: 1;
    color: rgb(235 233 255 / var(--tw-text-opacity))
}
</style>
