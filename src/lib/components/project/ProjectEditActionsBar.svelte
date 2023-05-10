<script>
	import Icon from '../basic_elements/Icon.svelte';
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	export let isEditActive = false;

	function clickMove() {
		dispatch('clickMove', isEditActive);
	}

	function clickRemove() {
		dispatch('clickRemove', isEditActive);
	}

	function toggleEditMode() {
		dispatch('toggleEditMode', !isEditActive);
	}
</script>

<div class="actionsBar">
	{#if isEditActive}
		<!-- <span
			on:click={clickMove}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon class="editActionsBar" name="move" width="40" height="40" />
		</span> -->
		<span
			on:click={clickRemove}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon class="editActionsBar" name="trash" width="40" height="40" />
		</span>
		<span
			on:click={toggleEditMode}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon class="editActionsBar" name="close_edit" width="40" height="40" />
		</span>
	{:else}
		<span
			on:click={toggleEditMode}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon class="editActionsBar" name="edit" width="40" height="40" />
		</span>
	{/if}
</div>

<style lang="postcss">
	.actionsBar {
		@apply flex gap-4 float-right;
	}
</style>
