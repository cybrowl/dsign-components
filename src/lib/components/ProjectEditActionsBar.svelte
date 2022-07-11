<script>
    import Icon from './Icon.svelte';

    let isEditActive = false;

    function toggleEditMode() {
        isEditActive = !isEditActive;
    }
</script>

<div class="actionsBar">
    {#if isEditActive}
        <span>
            <Icon name="move" width="40" height="40" />
        </span>
        <span>
            <Icon name="trash" width="40" height="40" />
        </span>
        <span on:click={toggleEditMode}>
            <Icon name="close_edit" width="40" height="40" />
        </span>
    {:else}
        <span on:click={toggleEditMode}>
            <Icon name="edit" width="40" height="40" />
        </span>
    {/if}
</div>

<style>
    .actionsBar {
        display: flex;
        @apply gap-4;
    }
</style>
