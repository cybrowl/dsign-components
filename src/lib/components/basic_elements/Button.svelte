<script>
	import {createEventDispatcher} from 'svelte';

	export let primary = false;
	export let secondary = false;
	export let tertiary = false;
	export let destroy = false;

	export let destroyDisabled = false;
	export let primaryDisabled = false;
	export let secondaryDisabled = false;
	export let tertiaryDisabled = false;
	export let disable = false;

	export let size = 'medium';
	export let label = '';
	let mode = 'button--primary';

	if (primary) {
		mode = 'button--primary';
	} else if (secondary) {
		mode = 'button--secondary';
	} else if (tertiary) {
		mode = 'button--tertiary';
	} else if (destroy) {
		mode = 'button--destroy';
	}

	const dispatch = createEventDispatcher();

	function onClick(event) {
		dispatch('click', event);
	}
</script>

<button
	type="button"
	disabled={primaryDisabled ||
		secondaryDisabled ||
		tertiaryDisabled ||
		destroyDisabled ||
		disable}
	class={['button', `button--${size}`, mode, $$props.class].join(' ')}
	class:button--primary-disabled={primaryDisabled === true}
	class:button--secondary-disabled={secondaryDisabled === true}
	class:button--tertiary-disabled={tertiaryDisabled === true}
	class:button--destroy-disabled={destroyDisabled === true}
	on:click={onClick}
	on:keypress={e => {
		//TODO: need to design how this will work A11y
	}}
>
	{label}
</button>

<style lang="postcss">
	.button {
		@apply font-sans font-bold text-white rounded-md border-0 cursor-pointer inline-block leading-5 h-full max-h-12;
	}
	.button--primary {
		@apply bg-tulip-purple;
	}
	.button--primary:active {
		@apply bg-primary-purple;
	}
	.button--primary-disabled {
		@apply bg-tulip-purple opacity-50;
	}
	.button--secondary {
		@apply bg-transparent border-solid border border-tulip-purple;
	}
	.button--secondary:active {
		@apply bg-transparent border-solid border border-primary-purple;
	}
	.button--secondary-disabled {
		@apply border-tulip-purple opacity-50;
	}
	.button--tertiary {
		@apply bg-smoky-grey;
	}
	.button--tertiary:active {
		@apply bg-dark-grey;
	}
	.button--tertiary-disabled {
		@apply bg-smoky-grey opacity-50;
	}
	.button--destroy {
		@apply bg-error-red;
	}
	.button--filter {
		@apply bg-transparent border-none text-grey;
	}
	.button--filter-active {
		@apply bg-transparent border-none text-bubble-purple;
	}
	.cursor_default {
		@apply cursor-default;
	}
	.button--destroy:active {
		@apply bg-error-red;
	}
	.button--destroy-disabled {
		@apply bg-error-red opacity-50;
	}
	.button--medium {
		@apply px-4 py-2 text-base;
	}

	.hover_lilalic_purple {
		@apply hover:bg-lilalic-purple;
	}

	.action_active {
		@apply cursor-default text-bubble-purple bg-backdrop;
	}
	.action_disabled {
		@apply cursor-pointer text-grey bg-backdrop hover:bg-backdrop;
	}
</style>
