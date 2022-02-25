<script>
    export let navItems = [];

    function onClick(event) {
        dispatch('click', event);
    }
</script>

<nav class="nav">
    {#each navItems as item}
        <a href={'/' + item.name} on:click={onClick}>{item.name}</a>
    {/each}
</nav>

<style>
    .nav > a {
        @apply font-sans font-bold text-white no-underline mr-8;
    }
</style>
