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

	export let size = 'medium';
	export let label = '';
	let mode = 'button--primary';

	let disabled = primaryDisabled || secondaryDisabled || tertiaryDisabled || destroyDisabled;

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
	{disabled}
	class={['button', $$props.class, `button--${size}`, mode].join(' ')}
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

<style>
	.button {
		@apply font-sans font-bold text-white rounded-md border-0 cursor-pointer inline-block leading-5 h-full;
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
	.button--destroy:active {
		@apply bg-error-red;
	}
	.button--destroy-disabled {
		@apply bg-error-red opacity-50;
	}
	.button--medium {
		@apply px-4 py-2 text-base;
	}
</style>
