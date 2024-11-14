<script>
	import Icon from '../basic_elements/Icon.svelte';
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let isEditActive = false;

	function clickRemove() {
		dispatch('clickRemove', isEditActive);
	}

	function toggleEditMode() {
		dispatch('toggleEditMode', !isEditActive);
	}
</script>

<div class="actionsBar">
	{#if isEditActive}
		<Icon
			class="cursor_pointer fill_dark_grey hover_primary_purple"
			name="trash"
			viewSize={{
				width: '40',
				height: '40'
			}}
			size="2.5rem"
			on:click={clickRemove}
		/>
		<Icon
			class="cursor_pointer fill_dark_grey hover_primary_purple"
			name="close_edit"
			size="2.5rem"
			on:click={toggleEditMode}
		/>
	{:else}
		<Icon
			class="cursor_pointer fill_dark_grey hover_primary_purple"
			name="edit"
			size="2.5rem"
			viewSize={{
				width: '40',
				height: '40'
			}}
			on:click={toggleEditMode}
		/>
	{/if}
</div>

<style>
	.actionsBar {
    float: right;
    display: flex;
    gap: 1rem
}
</style>
