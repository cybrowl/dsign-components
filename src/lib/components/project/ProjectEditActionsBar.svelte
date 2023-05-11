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
		<span
			on:click={clickRemove}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon
				class="cursor_pointer fill_dark_grey hover_primary_purple"
				name="trash"
				viewSize={{
					width: '40',
					height: '40'
				}}
				size="2.5rem"
			/>
		</span>
		<span
			on:click={toggleEditMode}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon
				class="cursor_pointer fill_dark_grey hover_primary_purple"
				name="close_edit"
				size="2.5rem"
			/>
		</span>
	{:else}
		<span
			on:click={toggleEditMode}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon
				class="cursor_pointer fill_dark_grey hover_primary_purple"
				name="edit"
				size="2.5rem"
			/>
		</span>
	{/if}
</div>

<style lang="postcss">
	.actionsBar {
		@apply flex gap-4 float-right;
	}
</style>
