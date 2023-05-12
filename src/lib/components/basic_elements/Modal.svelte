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
		class="modalBackdrop"
		in:fade
		on:click={onClose}
		on:keypress={e => {
			//TODO: need to design how this will work A11y
		}}
	/>
	<div class="modalLayout" in:fade={{delay: 500}} out:fade>
		<div class="modal">
			{#if modalHeaderVisible}
				<div class="modalHeader">
					<span
						class="modalHeaderClose"
						on:click={onClose}
						on:keypress={e => {
							//TODO: need to design how this will work A11y
						}}
					>
						<Icon
							class="cursor_pointer fill_white hover_bubble_purple"
							name="close_standard"
						/>
					</span>
				</div>
			{/if}
			<slot />
		</div>
	</div>
{/if}

<style lang="postcss">
	.modalBackdrop {
		@apply fixed top-0 left-0 right-0 h-full w-full bg-backdrop opacity-90 z-30;
	}
	.modalLayout {
		@apply fixed z-30;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.modal {
		@apply rounded-lg shadow bg-dark-grey;
	}
	.modalHeader {
		@apply flex flex-row-reverse;
	}
	.modalHeaderClose {
		@apply p-5 rounded-t;
	}
</style>
