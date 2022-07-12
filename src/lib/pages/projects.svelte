<script>
    import Nav from '../components/Navigation.svelte';
    import ProjectEditActionsBar from '../components/ProjectEditActionsBar.svelte';
    import ProjectsTabs from '../components/ProjectsTabs.svelte';
    import SnapCardEmpty from '$lib/components/SnapCardEmpty.svelte';
    export let navItems;
</script>

<main>
    <html lang="en" class="dark">
        <body class="pageBody">
            <div class="navItems">
                <Nav {navItems} />
            </div>

            <div class="actionsNav">
                <span class="projectsTabs">
                    <ProjectsTabs />
                </span>
                <span class="actionbar">
                    <ProjectEditActionsBar />
                </span>
            </div>

            <div class="snaps">
                <SnapCardEmpty />
            </div>
        </body>
    </html>
</main>

<style>
    .pageBody {
        @apply h-screen grid grid-cols-12 grid-rows-6 gap-y-2;
    }
    .navItems {
        @apply col-start-2 col-end-11 row-start-1 row-end-2;
    }
    .actionsNav {
        @apply col-start-2 col-end-12 row-start-2 row-end-6;
    }
    .projectsTabs {
        align-self: start;
    }
    .actionbar {
        align-self: end;
    }
    .snaps {
        @apply col-start-2 col-end-11 row-start-2 row-end-6 mt-14;
    }
</style>
