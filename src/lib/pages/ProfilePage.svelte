<script>
	import Avatar from '../components/basic_elements/Avatar.svelte';
	import Button from '../components/basic_elements/Button.svelte';
	import Icon from '../components/basic_elements/Icon.svelte';

	// import Notification from '../components/Notification.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';

	import ProfileBanner from '../components/profile/ProfileBanner.svelte';
	import ProfileInfo from '../components/profile/ProfileInfo.svelte';
	import ProfileTabs from '../components/profile/ProfileTabs.svelte';

	import ProjectCard from '../components/cards/ProjectCard.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let avatar = '';
	export let avatar_nav = '';
	export let username = '';
	export let is_authenticated = false;
	export let is_owner = false;
	export let navItems;
	export const isLoadingSnap = false;
	export let isLoadingProject;
	export let showOptionsPopover = false;
	export let project_store = [];
	// export let is_visible = false;
	export let profileTabsState = {
		isFavoritesSelected: false,
		isProjectsSelected: true
	};

	function handleProjectClick() {}
</script>

<link rel="stylesheet" href="/src/lib/global.css" />

<main>
	<html lang="en" class="dark">
		<body>
			<div class="grid_layout">
				<div class="navigation_main_layout">
					<PageNavigation {navItems}>
						<span>
							{#if is_authenticated}
								<Avatar avatar={avatar_nav} {username} />
								<Icon name="settings" width="44" height="44" />
							{:else}
								<Button primary={true} label="Connect" />
							{/if}
						</span>
					</PageNavigation>
				</div>

				<div class="profile_info_layout">
					<ProfileInfo {avatar} {is_owner} {username} />
				</div>

				<div class="profile_banner_layout">
					<ProfileBanner {is_authenticated} profile_banner_url="/default_profile_banner.png" />
				</div>

				<div class="profile_tabs_layout">
					<ProfileTabs
						{profileTabsState}
						on:toggleProjects={e => profileTabsState.set(e.detail)}
						on:toggleFavorites={e => profileTabsState.set(e.detail)}
					/>
				</div>

				{#if profileTabsState.isProjectsSelected}
					<div class="projects_layout">
						{#each project_store as project}
							<ProjectCard {project} {isLoadingProject} {showOptionsPopover} on:clickProject={handleProjectClick} />
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

<style lang="postcss">
	.grid_layout {
		@apply hidden lg:grid grid-cols-12 relative ml-12 mr-12;
	}
	.navigation_main_layout {
		@apply col-start-1 col-end-13 row-start-1 row-end-auto;
	}
	.navigation_main_layout span {
		@apply flex gap-x-3 cursor-pointer;
	}
	.profile_info_layout {
		@apply relative col-start-1 col-end-4 row-start-2 row-end-auto;
	}
	.profile_banner_layout {
		@apply col-start-4 col-end-13 row-start-2 row-end-auto;
	}
	.profile_tabs_layout {
		@apply hidden lg:grid col-start-4 col-end-13 row-start-3 row-end-auto mt-12 self-end justify-between items-center mb-8;
	}
	.projects_layout {
		@apply hidden lg:grid col-start-4 col-end-13 grid-cols-3 row-start-4 row-end-auto gap-x-8 gap-y-12 mb-16;
	}
</style>
