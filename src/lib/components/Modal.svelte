<script>
    import {fade, fly} from 'svelte/transition';
    import {createEventDispatcher} from 'svelte';
    import Icon from './Icon.svelte';

    export let isModalOpen = true;
    export let centered = true;
    export let modalHeaderVisible = true;
    export let closeModalAfterNumSecs = false;
    const dispatch = createEventDispatcher();

    function onClose(event) {
        dispatch('closeModal', event);
        isModalOpen = !isModalOpen;
    }
</script>

{#if closeModalAfterNumSecs}
    <span class="hidden">
        {setTimeout(function () {
            isModalOpen = false;
        }, 2000)}
    </span>
{/if}

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
            <div class="modalBody" class:centered={centered === true}>
                <slot />
            </div>
        </div>
    </div>
{/if}

<style>
    .modalBackdrop {
        @apply fixed top-0 left-0 right-0 h-full w-full bg-backdrop opacity-90;
    }
    .modalLayout {
        @apply fixed top-40;
        left: 30%;
        right: 30%;
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
    .modalBody {
        @apply relative;
    }
    .centered {
        @apply flex flex-col items-center;
    }
    .hidden {
        @apply invisible;
    }
</style>
