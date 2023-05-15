<script>
	import Button from '../basic_elements/Button.svelte';
	import get from 'lodash/get';

	export let images = [];

	const setCover = selectedImage => {
		images = images.map(image => {
			if (image === selectedImage) {
				image.cover = true;
			} else {
				image.cover = false;
			}
			return image;
		});
	};

	// Add mouseOver property to each image
	images = images.map(image => ({...image, mouseOver: false}));
</script>

{#each images as image (image.id)}
	<span
		class="container"
		on:mouseenter={() => (image.mouseOver = true)}
		on:mouseleave={() => (image.mouseOver = false)}
	>
		{#if image.mouseOver && get(image, 'cover', false) === true}
			<Button
				label="Cover"
				disabled={true}
				class="snap_creation_cover_active"
			/>
		{/if}
		{#if image.mouseOver && get(image, 'cover', false) === false}
			<Button
				on:click={() => setCover(image)}
				label="Cover"
				class="snap_creation_cover_disabled"
			/>
		{/if}
		<img src={image.url} alt="img" />
	</span>
{/each}

<style lang="postcss">
	.container {
		@apply relative mb-8 flex flex-col items-center;
	}
</style>
