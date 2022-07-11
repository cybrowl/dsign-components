<script>
    import Nav from '../components/Navigation.svelte';
    import ProjectEditActionsBar from '../components/ProjectEditActionsBar.svelte';
    import SnapCardEmpty from '$lib/components/SnapCardEmpty.svelte';
    export let navItems;
</script>

<main>
    <html lang="en" class="dark">
        <body class="pageBody">
            <div class="navItems">
                <Nav {navItems} />
            </div>
            <div class="actionbar">
                <ProjectEditActionsBar />
            </div>
            <div class="snaps">
                <SnapCardEmpty />
            </div>
        </body>
    </html>
</main>

<style>
    .pageBody {
        @apply h-screen grid grid-cols-12 grid-rows-4;
    }
    .navItems {
        @apply col-start-2 mt-5;
    }
    .actionbar {
        @apply col-start-11 justify-items-end;
        align-self: end;
    }
    .snaps {
        @apply col-start-2;
        @apply col-end-11;
        @apply row-start-2;
        @apply row-end-3;
    }
</style>
