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

<style>
	.button {
    display: inline-block;
    height: 100%;
    max-height: 3rem;
    cursor: pointer;
    border-radius: 0.375rem;
    border-width: 0px;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.button--primary {
    --tw-bg-opacity: 1;
    background-color: rgb(98 89 200 / var(--tw-bg-opacity))
}
	.button--primary:active {
    --tw-bg-opacity: 1;
    background-color: rgb(122 113 222 / var(--tw-bg-opacity))
}
	.button--primary-disabled {
    --tw-bg-opacity: 1;
    background-color: rgb(98 89 200 / var(--tw-bg-opacity));
    opacity: 0.5
}
	.button--secondary {
    border-width: 1px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(98 89 200 / var(--tw-border-opacity));
    background-color: transparent
}
	.button--secondary:active {
    border-width: 1px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(122 113 222 / var(--tw-border-opacity));
    background-color: transparent
}
	.button--secondary-disabled {
    --tw-border-opacity: 1;
    border-color: rgb(98 89 200 / var(--tw-border-opacity));
    opacity: 0.5
}
	.button--tertiary {
    --tw-bg-opacity: 1;
    background-color: rgb(69 67 82 / var(--tw-bg-opacity))
}
	.button--tertiary:active {
    --tw-bg-opacity: 1;
    background-color: rgb(50 49 61 / var(--tw-bg-opacity))
}
	.button--tertiary-disabled {
    --tw-bg-opacity: 1;
    background-color: rgb(69 67 82 / var(--tw-bg-opacity));
    opacity: 0.5
}
	.button--destroy {
    --tw-bg-opacity: 1;
    background-color: rgb(252 48 48 / var(--tw-bg-opacity))
}
	.button--filter {
    border-style: none;
    background-color: transparent;
    --tw-text-opacity: 1;
    color: rgb(90 88 102 / var(--tw-text-opacity))
}
	.button--filter-active {
    border-style: none;
    background-color: transparent;
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
	.cursor_default {
    cursor: default
}
	.button--destroy:active {
    --tw-bg-opacity: 1;
    background-color: rgb(252 48 48 / var(--tw-bg-opacity))
}
	.button--destroy-disabled {
    --tw-bg-opacity: 1;
    background-color: rgb(252 48 48 / var(--tw-bg-opacity));
    opacity: 0.5
}
	.button--medium {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem
}
	.hover_lilalic_purple:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(150 140 255 / var(--tw-bg-opacity))
}
	.action_active {
    cursor: default;
    --tw-bg-opacity: 1;
    background-color: rgb(27 26 34 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
	.action_disabled {
    cursor: pointer;
    --tw-bg-opacity: 1;
    background-color: rgb(27 26 34 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(90 88 102 / var(--tw-text-opacity))
}
	.action_disabled:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(27 26 34 / var(--tw-bg-opacity))
}
</style>
