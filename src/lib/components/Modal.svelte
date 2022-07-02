<script>
    import {fade, fly} from 'svelte/transition';
    import {createEventDispatcher} from 'svelte';
    import Icon from './Icon.svelte';

    export let isModalOpen = true;
    export let modalHeaderVisible = true;
    const dispatch = createEventDispatcher();

    function onClose(event) {
        dispatch('closeModal', event);
        isModalOpen = !isModalOpen;
    }
</script>

{#if isModalOpen}
    <div class="modalBackdrop" on:click={onClose} />
    <div class="modalLayout" in:fly={{y: 200, duration: 1000}} out:fade>
        <div class="modal">
            {#if modalHeaderVisible}
                <div class="modalHeader">
                    <span class="modalHeaderClose" on:click={onClose}>
                        <Icon class="closeStandard" name="close_standard" width="20" height="20" />
                    </span>
                </div>
            {/if}
            <slot />
        </div>
    </div>
{/if}

<style>
    .modalBackdrop {
        @apply fixed top-0 left-0 right-0 h-full w-full bg-backdrop opacity-90;
    }
    .modalLayout {
        @apply fixed;
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
