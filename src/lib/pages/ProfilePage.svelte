<script>
	import Avatar from '../components/basic_elements/Avatar.svelte';
	import Button from '../components/basic_elements/Button.svelte';
	import Icon from '../components/basic_elements/Icon.svelte';

	import {get, isEmpty} from 'lodash';

	// import Notification from '../components/Notification.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';

	import ProfileBanner from '../components/profile/ProfileBanner.svelte';
	import ProfileInfo from '../components/profile/ProfileInfo.svelte';
	import ProfileTabs from '../components/profile/ProfileTabs.svelte';

	import ProjectCard from '../components/cards/ProjectCard.svelte';
	import ProjectCardCreate from '../components/cards/ProjectCardCreate.svelte';
	import CardEmpty from '../components/cards/CardEmpty.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let is_authenticated = false;
	export let is_owner = false;

	export let user_profile = {};
	export let my_profile = {};

	export let project_store = {};
	export let favorite_store = {};

	// export let modal_visible = {};

	export let profileTabsState = {
		isFavoritesSelected: false,
		isProjectsSelected: true
	};

	let optionsPopover = {
		edit: true,
		delete: true
	};

	function handleProjectClick() {
		console.log('project click');
	}
	function handleDeleteFavorite() {
		console.log('delete favorite');
	}
</script>

<main>
	<html lang="en" class="dark">
		<body>
			<div class="grid_layout">
				<div class="navigation_main_layout">
					<PageNavigation>
						<span>
							{#if is_authenticated}
								<Avatar
									avatar={get(my_profile, 'avatar', '')}
									username={get(my_profile, 'username', '')}
								/>
								<Icon
									name="settings"
									size="2.75rem"
									class="cursor_pointer fill_dark_grey hover_smoky_grey"
									viewSize={{
										width: '44',
										height: '44'
									}}
								/>
							{:else}
								<Button primary={true} label="Connect" />
							{/if}
						</span>
					</PageNavigation>
				</div>

				<div class="profile_info_layout">
					<ProfileInfo
						{is_owner}
						avatar={get(user_profile, 'avatar', '')}
						username={get(user_profile, 'username', '')}
					/>
				</div>

				<div class="profile_banner_layout">
					<ProfileBanner
						{is_owner}
						profile_banner_url="/default_profile_banner.png"
					/>
				</div>

				<div class="tabs_layout">
					<ProfileTabs
						{profileTabsState}
						on:toggleProjects={e => profileTabsState.set(e.detail)}
						on:toggleFavorites={e => profileTabsState.set(e.detail)}
					/>
				</div>

				<div class="content_layout">
					{#if profileTabsState.isProjectsSelected}
						<!-- Fetching Projects -->
						{#if project_store.isFetching === true}
							<ProjectCard isLoadingProject={true} />
						{/if}

						<!-- Rendering Projects -->
						{#if project_store.isFetching === false}
							<!-- No Projects Found -->
							{#if isEmpty(project_store.projects)}
								{#if is_owner}
									<ProjectCardCreate />
								{:else}
									<CardEmpty
										name="project_empty"
										content="No projects found"
										view_size={{width: '92', height: '92'}}
									/>
								{/if}
							{/if}

							<!-- Projects -->
							{#if !isEmpty(project_store.projects)}
								{#each project_store.projects as project}
									<ProjectCard
										{project}
										{optionsPopover}
										showOptionsPopover={is_owner ? true : false}
										on:clickProject={handleProjectClick}
									/>
								{/each}

								{#if is_owner}
									<ProjectCardCreate />
								{/if}
							{/if}
						{/if}
					{/if}

					{#if profileTabsState.isFavoritesSelected}
						<!-- Fetching Favorites -->
						{#if favorite_store.isFetching === true}
							<ProjectCard isLoadingProject={true} />
						{/if}

						<!-- Rendering Favorites -->
						{#if favorite_store.isFetching === false}
							<!-- No Favorites Found -->
							{#if isEmpty(favorite_store.projects)}
								<CardEmpty
									name="project_empty"
									content="No favorite projects"
									view_size={{width: '92', height: '92'}}
								/>
							{/if}

							<!-- Favorites Found -->
							{#if !isEmpty(favorite_store.projects)}
								{#each favorite_store.projects as project}
									<ProjectCard
										{project}
										hideSnapsCount={true}
										showUsername={true}
										showOptionsPopover={is_owner ? true : false}
										optionsPopover={{
											edit: false,
											delete: true
										}}
										on:clickProject={handleProjectClick}
										on:deleteProject={handleDeleteFavorite}
									/>
								{/each}
							{/if}
						{/if}
					{/if}
				</div>
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
		@apply row-start-1 row-end-auto col-start-1 col-end-13;
	}
	.navigation_main_layout span {
		@apply flex gap-x-3 cursor-pointer;
	}
	.profile_info_layout {
		@apply row-start-2 row-end-auto col-start-1 col-end-4;
	}
	.profile_banner_layout {
		@apply row-start-2 row-end-auto col-start-4 col-end-13;
	}
	.tabs_layout {
		@apply hidden lg:grid row-start-3 row-end-auto col-start-4 col-end-13 mt-12 self-end justify-between items-center mb-8;
	}
	.content_layout {
		@apply hidden lg:grid row-start-4 row-end-auto col-start-4 col-end-13 grid-cols-3 gap-x-8 gap-y-12 mb-16;
	}
</style>
