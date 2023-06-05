<script>
	import Login from '../components/login/Login.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';

	import AccountCreationModal from '../modals/AccountCreationModal.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export const avatar = '';
	export const username = '';
	export let createdAccount = false;
	export let is_authenticated = false;
	export let navigationItems;
	export const isLoadingSnap = false;
	export let my_profile = {};
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

				<AccountCreationModal {createdAccount} />
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
		@apply hidden lg:grid grid-cols-12 gap-y-2 relative mx-12 2xl:mx-60;
	}
	.navigation_main_layout {
		@apply col-start-1 col-end-13 row-start-1 row-end-auto;
	}
	.navigation_main_layout span {
		@apply flex gap-x-3 cursor-pointer;
	}
</style>
