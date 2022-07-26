<script>
    import Icon from './Icon.svelte';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let isEditActive = false;

    function toggleEditMode() {
        isEditActive = !isEditActive;

        dispatch('toggleEditMode', isEditActive);
    }
</script>

<div class="actionsBar">
    {#if isEditActive}
        <span>
            <Icon class="editActionsBar" name="move" width="40" height="40" />
        </span>
        <span>
            <Icon class="editActionsBar" name="trash" width="40" height="40" />
        </span>
        <span on:click={toggleEditMode}>
            <Icon class="editActionsBar" name="close_edit" width="40" height="40" />
        </span>
    {:else}
        <span on:click={toggleEditMode}>
            <Icon class="editActionsBar" name="edit" width="40" height="40" />
        </span>
    {/if}
</div>

<style>
    .actionsBar {
        @apply flex gap-4 float-right;
    }
</style>
