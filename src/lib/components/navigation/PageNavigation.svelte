<script>
	import {createEventDispatcher} from 'svelte';
	export let navigationItems = [];
	const dispatchEvent = createEventDispatcher();

	function handleItemClick(event) {
		dispatchEvent('itemclick', event);
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
		<a href="/" class="logo" aria-label="Home" on:keypress={handleKeyPress}>
			<img src="/logo.png" alt="letter D" />Sign
		</a>
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

<style lang="postcss">
	.pageNavigation {
		@apply flex flex-row justify-between items-center mt-6 mb-4;
	}
	.logo {
		@apply mr-12 text-4xl font-bold text-white;
	}
	.navItem {
		@apply font-sans font-bold text-white no-underline mr-8;
	}
	.selected {
		@apply text-bubble-purple;
	}
	.logo {
		@apply flex flex-row items-center;
	}
	.navigation {
		@apply flex flex-row items-center;
	}
	.navigation img {
		@apply w-9 h-9 mr-1;
	}
</style>
