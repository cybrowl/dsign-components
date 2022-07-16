<script>
    import Nav from '../components/Navigation.svelte';
    import ProjectEditActionsBar from '../components/ProjectEditActionsBar.svelte';
    import ProjectsTabs from '../components/ProjectsTabs.svelte';
    import SnapCard from '../components/SnapCard.svelte';

    export let navItems;
    export let snap_storage = [];
</script>

<main>
    <html lang="en" class="dark">
        <body class="dark:bg-backdrop dark:text-gray-200 h-screen">
            <div class="wrapper">
                <div class="navItems">
                    <Nav {navItems} />
                </div>

                <div class="actionbar">
                    <ProjectsTabs />
                    <ProjectEditActionsBar />
                </div>

                <div class="snaps">
                    {#each snap_storage as snap}
                        <SnapCard {snap} />
                    {/each}
                </div>
            </div>
        </body>
    </html>
</main>

<style>
    .wrapper {
        @apply grid grid-cols-12 gap-y-2;
    }
    .navItems {
        @apply col-start-2 col-end-12 mb-24;
    }
    .actionbar {
        @apply flex col-start-2 col-end-12 row-start-2 row-end-auto mx-4 self-end justify-between items-center;
    }
    .snaps {
        @apply col-start-2 col-end-12 grid grid-cols-4 row-start-3 row-end-auto mx-4 gap-10 mt-10;
    }
</style>
