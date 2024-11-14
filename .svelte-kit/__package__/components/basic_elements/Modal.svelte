<script>
	import {fade, fly} from 'svelte/transition';
	import {createEventDispatcher} from 'svelte';
	import Icon from './Icon.svelte';

	export let isModalOpen = true;
	export let isModalLocked = false;
	export let modalHeaderVisible = true;
	const dispatch = createEventDispatcher();

	function onClose(event) {
		if (isModalLocked) {
			return null;
		}

		dispatch('closeModal', event);
		isModalOpen = !isModalOpen;
	}
</script>

{#if isModalOpen}
	<div
		class="modal_backdrop"
		in:fade
		on:click={onClose}
		on:keypress={e => {
			//TODO: need to design how this will work A11y
		}}
		role="button"
		tabindex="0"
	/>
	<div class="modal_layout" in:fade={{delay: 500}} out:fade>
		<div class="modal">
			{#if modalHeaderVisible}
				<div class="header">
					<Icon
						class="cursor_pointer fill_white hover_bubble_purple"
						name="close_standard"
						on:click={onClose}
					/>
				</div>
			{/if}
			<slot />
		</div>
	</div>
{/if}

<style>
	.modal_backdrop {
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		z-index: 30;
		height: 100%;
		width: 100%;
		--tw-bg-opacity: 1;
		background-color: rgb(27 26 34 / var(--tw-bg-opacity));
		opacity: 0.9
}
	.modal_layout {
		position: fixed;
		z-index: 30;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%)
}
	.modal {
		border-radius: 0.5rem;
		--tw-bg-opacity: 1;
		background-color: rgb(50 49 61 / var(--tw-bg-opacity));
		--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
	.header {
		display: flex;
		flex-direction: row-reverse;
		padding: 1rem
}
</style>
