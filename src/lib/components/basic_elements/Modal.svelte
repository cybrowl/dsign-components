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

<style lang="postcss">
	.modal_backdrop {
		@apply fixed top-0 left-0 right-0 h-full w-full bg-backdrop opacity-90 z-30;
	}
	.modal_layout {
		@apply fixed z-30;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.modal {
		@apply rounded-lg shadow bg-dark-grey;
	}
	.header {
		@apply flex flex-row-reverse p-4;
	}
</style>
