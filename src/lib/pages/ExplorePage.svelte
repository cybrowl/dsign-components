<script>
	import Avatar from '../components/basic_elements/Avatar.svelte';
	import Button from '../components/basic_elements/Button.svelte';
	import Notification from '../components/basic_elements/Notification.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';
	import ProjectCard from '../components/cards/ProjectCard.svelte';
	import Icon from '../components/basic_elements/Icon.svelte';

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
						<span>
							{#if is_authenticated}
								<Avatar avatar="https://i.ibb.co/TRJmsGT/motoko.png" />
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

<style lang="postcss">
	.grid_layout {
		@apply hidden lg:grid grid-cols-12 gap-y-2 relative ml-12 mr-12;
	}
	.navigation_main_layout {
		@apply col-start-1 col-end-13 row-start-1 row-end-auto;
	}
	.navigation_main_layout span {
		@apply flex gap-x-3 cursor-pointer;
	}
	.notification_layout {
		@apply absolute col-start-12 col-end-13 row-start-2 row-end-3 top-0 right-0;
	}
	.projects_layout {
		@apply hidden lg:grid col-start-1 col-end-13 grid-cols-4 
		row-start-2 row-end-auto gap-x-6 gap-y-12 mb-16;
	}
</style>
