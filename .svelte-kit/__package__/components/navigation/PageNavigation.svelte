<script>
	import {createEventDispatcher} from 'svelte';
	export let navigationItems = [];
	const dispatchEvent = createEventDispatcher();

	function handleItemClick(event) {
		dispatchEvent('itemclick', event);
	}

	function handleHomeClick(event) {
		dispatchEvent('home', event);
	}

	function handleKeyPress(event, item) {
		if (event.key === 'Enter' || event.key === ' ') {
			handleItemClick(item);
			event.preventDefault();
		}
	}
</script>

<div class="pageNavigation" aria-label="Main navigation">
	<nav class="navigation">
		<button
			class="logo"
			aria-label="Home"
			on:keypress={handleKeyPress}
			on:click={handleHomeClick}
		>
			<img class="logo_img" src="/logo.png" alt="letter D" />Sign
		</button>
		{#each navigationItems as item}
			<a
				class="navItem"
				href={'/' + item.href}
				class:selected={item.isSelected === true ? 'selected' : ''}
				tabindex="0"
				aria-label={item.name}
				on:click={() => handleItemClick(item)}
				on:keypress={event => handleKeyPress(event, item)}
				>{item.name}
			</a>
		{/each}
	</nav>
	<slot />
</div>

<style>
	.pageNavigation {

    margin-top: 1.5rem;

    margin-bottom: 2rem;

    display: flex;

    flex-direction: row;

    align-items: center;

    justify-content: space-between
}

	.logo {

    margin-right: 3rem;

    display: flex;

    flex-direction: row;

    align-items: center;

    font-size: 1.5rem;

    line-height: 2rem;

    font-weight: 700;

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

	@media (min-width: 1536px) {

    .logo {

        font-size: 1.875rem;

        line-height: 2.25rem
    }
}

	@media (min-width: 2222px) {

    .logo {

        font-size: 2.25rem;

        line-height: 2.5rem
    }
}

	.logo_img {

    margin-right: 0.25rem;

    height: 1.5rem;

    width: 1.5rem
}

	@media (min-width: 1536px) {

    .logo_img {

        height: 2rem;

        width: 2rem
    }
}

	@media (min-width: 2222px) {

    .logo_img {

        height: 2.25rem;

        width: 2.25rem
    }
}

	.navItem {

    margin-right: 2rem;

    font-family: Roboto, sans-serif;

    font-weight: 700;

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity));

    text-decoration-line: none
}

	.selected {

    --tw-text-opacity: 1;

    color: rgb(182 175 252 / var(--tw-text-opacity))
}

	.navigation {

    display: flex;

    flex-direction: row;

    align-items: center
}
</style>
