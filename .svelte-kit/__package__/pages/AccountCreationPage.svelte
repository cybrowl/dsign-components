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
	.navigation_main_layout span {
    display: flex;
    cursor: pointer;
    -moz-column-gap: 0.75rem;
         column-gap: 0.75rem
}
</style>
