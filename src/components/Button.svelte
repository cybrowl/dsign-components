<script>
    import {createEventDispatcher} from 'svelte';

    export let primary = false;
    export let primaryDisabled = false;
    export let secondaryDisabled = false;
    export let size = 'medium';
    export let label = '';

    let disabled = primaryDisabled || secondaryDisabled;
    let mode = primary ? 'button--primary' : 'button--secondary';
    let primaryDisabledStyle = primaryDisabled && 'button--primary-disabled';
    let secondaryDisabledStyle = secondaryDisabled && 'button--secondary-disabled';

    const dispatch = createEventDispatcher();

    function onClick(event) {
        dispatch('click', event);
    }
</script>

<button
    type="button"
    {disabled}
    class={['button', $$props.class, `button--${size}`, primaryDisabledStyle, secondaryDisabledStyle, mode].join(' ')}
    on:click={onClick}
>
    {label}
</button>

<style>
    .button {
        @apply font-sans font-bold text-white rounded-md border-0 cursor-pointer inline-block;
    }
    .button--primary {
        @apply bg-tulip-purple;
    }
    .button--primary:active {
        @apply bg-primary-purple;
    }
    .button--primary-disabled {
        @apply bg-light-purple opacity-50;
    }
    .button--secondary {
        @apply bg-transparent border-solid border border-bubble-purple;
    }
    .button--secondary:active {
        @apply bg-transparent border-solid border border-lilalic-purple;
    }
    .button--secondary-disabled {
        @apply border-bubble-purple;
    }
    .button--disabled {
        @apply bg-light-purple opacity-50;
    }
    .button--medium {
        font-size: 16px;
        padding: 12px 24px;
    }
</style>
