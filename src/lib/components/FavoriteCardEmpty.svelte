<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from './Icon.svelte';

	const dispatch = createEventDispatcher();

	function clickFavoriteEmpty(event) {
		dispatch('clickFavoriteEmpty', event);
	}
</script>

<div
	class="favoriteCardEmpty"
	on:click={clickFavoriteEmpty}
	on:keypress={e => {
		//TODO: need to design how this will work A11y
	}}
>
	<span>
		<Icon name="project_empty" width="64" height="64" />
		<p>No favorite projects</p>
	</span>
</div>

<style lang="postcss">
	.favoriteCardEmpty {
		@apply bg-black-a w-full max-w-xs h-56 border border-castle-grey rounded
        flex justify-center drop-shadow-md;
	}
	.favoriteCardEmpty span {
		@apply flex flex-col justify-center items-center;
	}
	.favoriteCardEmpty > span > p {
		@apply text-castle-grey font-sans font-bold;
	}
</style>
