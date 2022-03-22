<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();

    function onClick() {
        dispatch('click', {name: 'hello'});
    }
</script>

<div class="settings">
    <h2>Create a username</h2>
</div>

<style>
    .settings {
        @apply font-sans text-white mb-6;
    }
</style>
