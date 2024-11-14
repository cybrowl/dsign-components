<script>
	import Login from '../components/login/Login.svelte';
	import Notification from '../components/basic_elements/Notification.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';
	import ProjectCard from '../components/cards/ProjectCard.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export const avatar = '';
	export const username = '';
	export let is_authenticated = false;
	export let navigationItems;
	export const isLoadingSnap = false;
	export let isLoadingProject;
	export let notification_visible = {
		auth_error: false
	};

	export let notification = {
		message: ''
	};

	export let showOptionsPopover = false;
	export let project_store = [];
	export let my_profile = {};

	// export let is_visible = false;
	export let profileTabsState = {
		isFavoritesSelected: false,
		isProjectsSelected: true
	};

	function handleProjectClick() {}
</script>

<main>
	<html lang="en" class="dark">
		<body>
			<div class="grid_layout">
				<div class="navigation_main_layout">
					<PageNavigation {navigationItems}>
						<Login {is_authenticated} {my_profile} />
					</PageNavigation>
				</div>

				<!-- Notification -->
				{#if notification_visible.auth_error}
					<div class="notification_layout">
						<Notification
							is_visible={notification_visible.auth_error}
							hide_delay_sec={2000}
						>
							<p>{notification.message}</p>
						</Notification>
					</div>
				{/if}

				{#if profileTabsState.isProjectsSelected}
					<div class="projects_layout">
						{#each project_store as project}
							<ProjectCard
								{project}
								{isLoadingProject}
								{showOptionsPopover}
								hideSnapsCount={true}
								showUsername={true}
								on:clickProject={handleProjectClick}
							/>
						{/each}
					</div>
				{/if}
			</div>
		</body>
	</html>
</main>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style>
	.grid_layout {
    position: relative;
    margin-left: 3rem;
    margin-right: 3rem;
    display: none;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    row-gap: 0.5rem
}
@media (min-width: 1024px) {
    .grid_layout {
        display: grid
    }
}
@media (min-width: 1536px) {
    .grid_layout {
        margin-left: 15rem;
        margin-right: 15rem
    }
}
	.navigation_main_layout {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: auto
}
	.notification_layout {
    position: absolute;
    top: 0px;
    right: 0px;
    grid-column-start: 12;
    grid-column-end: 13;
    grid-row-start: 2;
    grid-row-end: 3
}
	.projects_layout {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 2;
    grid-row-end: auto;
    margin-bottom: 4rem;
    display: none;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    -moz-column-gap: 1.5rem;
         column-gap: 1.5rem;
    row-gap: 3rem
}
	@media (min-width: 1024px) {
    .projects_layout {
        display: grid
    }
}
</style>
