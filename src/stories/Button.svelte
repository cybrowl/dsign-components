<script>
    import {createEventDispatcher} from 'svelte';

    export let disabled = false;
    export let primary = false;
    export let size = 'medium';
    export let label = '';

    let mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    let disabledMode = disabled && 'storybook-button--disabled';
    const dispatch = createEventDispatcher();

    function onClick(event) {
        dispatch('click', event);
    }
</script>

<button
    type="button"
    {disabled}
    class={['storybook-button', `storybook-button--${size}`, disabledMode, mode].join(' ')}
    on:click={onClick}
>
    {label}
</button>

<style>
    .storybook-button {
        @apply font-sans font-bold text-white rounded-md border-0 cursor-pointer inline-block;
    }
    .storybook-button--primary {
        @apply bg-tulip-purple;
    }
    .storybook-button--primary:active {
        @apply bg-primary-purple;
    }
    .storybook-button--secondary {
        @apply text-gray-900 bg-transparent border-[1px];
    }
    .storybook-button--disabled {
        @apply bg-light-purple opacity-50;
    }
    .storybook-button--medium {
        font-size: 16px;
        padding: 12px 24px;
    }
</style>
