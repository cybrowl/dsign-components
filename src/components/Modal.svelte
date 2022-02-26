<script>
    import {fade, fly} from 'svelte/transition';
    import {createEventDispatcher} from 'svelte';
    import Icon from './Icon.svelte';

    const dispatch = createEventDispatcher();

    function onClick(event) {
        dispatch('click', event);
    }

    function onClose(event) {
        dispatch('click', event);
    }
</script>

<div class="modalBackdrop" on:click={onClick} />
<div class="modalLayout" in:fly={{y: 200, duration: 1000}} out:fade>
    <div class="modal">
        <div class="modalHeader">
            <span class="modalHeaderClose" on:click={onClose}>
                <Icon class="closeStandard" name="close_standard" width="20" height="20" />
            </span>
        </div>
        <div class="modalBody" />
    </div>
</div>

<style>
    .modalBackdrop {
        @apply fixed top-0 left-0 right-0 h-full w-full bg-backdrop opacity-90;
    }
    .modalLayout {
        @apply fixed top-40 left-1/4 right-1/4;
    }
    .modal {
        @apply bg-white rounded-lg shadow bg-dark-grey;
    }
    .modalHeader {
        @apply flex float-right;
    }
    .modalHeaderClose {
        @apply p-5 rounded-t;
    }
    .modalBody {
        @apply relative h-96;
    }
</style>
