<script>
	export let content = '';
</script>

<div class="imagesEmpty">
	<span>
		<p>{content}</p>
	</span>
</div>

<style lang="postcss">
	.imagesEmpty {
		@apply bg-black-a w-full h-full border border-castle-grey rounded
		flex justify-center drop-shadow-md;
	}
	.imagesEmpty span {
		@apply flex flex-col justify-center items-center;
	}
	.imagesEmpty > span > p {
		@apply text-castle-grey font-sans font-bold;
	}
</style>
