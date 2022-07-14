<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let isSnapsSelected = false;
    export let isProjectsSelected = false;

    function toggleSnaps() {
        isSnapsSelected = !isSnapsSelected;
        isProjectsSelected = false;

        dispatch('toggleSnaps', {});
    }
    function toggleProjects() {
        isProjectsSelected = !isProjectsSelected;
        isSnapsSelected = false;

        dispatch('toggleProjects', {});
    }
</script>

<div class="projectsTabs">
    <span class={isSnapsSelected === true ? 'selected' : ''} on:click={toggleSnaps}>Snaps</span>
    <span class={isProjectsSelected === true ? 'selected' : ''} on:click={toggleProjects}>Projects</span>
</div>

<style>
    .projectsTabs {
        @apply font-sans flex gap-4 float-left cursor-pointer text-white text-sm;
    }
    .selected {
        @apply text-bubble-purple;
        border-bottom: 3px solid #b6affc;
        padding-bottom: 3px;
    }
</style>
