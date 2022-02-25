<script>
    export let navItems = [];
</script>

<nav class="nav">
    {#each navItems as item}
        <a href="#_">{item.name}</a>
    {/each}
</nav>

<style>
    .nav > a {
        @apply font-sans font-bold text-white no-underline mr-8;
    }
</style>
