<script>
    import {createEventDispatcher} from 'svelte';

    export let disabled = false;
    export let primary = false;
    export let size = 'medium';
    export let label = '';

    let mode = primary ? 'button--primary' : 'button--secondary';
    let disabledMode = disabled && 'button--disabled';
    const dispatch = createEventDispatcher();

    function onClick(event) {
        dispatch('click', event);
    }
</script>

<button type="button" {disabled} class={['button', `button--${size}`, disabledMode, mode].join(' ')} on:click={onClick}>
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
    .button--secondary {
        @apply bg-transparent border border-bubble-purple;
    }
    .button--secondary:active {
        @apply bg-transparent border border-lilalic-purple;
    }
    .button--disabled {
        @apply bg-light-purple opacity-50;
    }
    .button--medium {
        font-size: 16px;
        padding: 12px 24px;
    }
</style>
