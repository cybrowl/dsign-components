<script>
    import {createEventDispatcher} from 'svelte';
    export let navItems = [];
    const dispatch = createEventDispatcher();

    function onClick(event) {
        dispatch('click', event);
    }
</script>

<nav class="nav">
    <a href="/" class="logo">DSign</a>
    {#each navItems as item}
        <a href={'/' + item.name} on:click={onClick}>{item.name}</a>
    {/each}
</nav>

<style>
    .logo {
        @apply mr-12 text-4xl font-bold;
    }
    .nav > a {
        @apply font-sans font-bold text-white no-underline mr-8;
    }
</style>
