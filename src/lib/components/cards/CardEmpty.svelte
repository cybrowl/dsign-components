<script>
	import Icon from '../basic_elements/Icon.svelte';

	export let name = '';
	export let content = '';
	export let view_size = {
		width: '24',
		height: '24'
	};
</script>

<div class="cardEmpty">
	<span>
		<Icon {name} size="4rem" viewSize={view_size} />
		<p>{content}</p>
	</span>
</div>

<style lang="postcss">
	.cardEmpty {
		@apply bg-black-a w-full max-w-xs h-60 border border-castle-grey rounded
		flex justify-center drop-shadow-md;
	}
	.cardEmpty span {
		@apply flex flex-col justify-center items-center;
	}
	.cardEmpty > span > p {
		@apply text-castle-grey font-sans font-bold;
	}
</style>
