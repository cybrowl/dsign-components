<script>
	import Button from '../basic_elements/Button.svelte';
	import Icon from '../basic_elements/Icon.svelte';
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
		class="images"
		on:mouseenter={() => (image.mouseOver = true)}
		on:mouseleave={() => (image.mouseOver = false)}
	>
		<span class="image_action">
			<div class="action_layout">
				{#if image.mouseOver}
					<Icon
						name="trash"
						clickable={true}
						size="2rem"
						class="cursor_pointer fill_dark_grey hover_primary_purple"
						viewSize={{width: '40', height: '40'}}
					/>
				{/if}

				{#if image.mouseOver && get(image, 'cover', false) === true}
					<Button label="Cover" class="action_active" disabled={true} />
				{/if}

				{#if image.mouseOver && get(image, 'cover', false) === false}
					<Button
						label="Cover"
						class="action_disabled"
						on:click={() => setCover(image)}
					/>
				{/if}
			</div>
		</span>

		<img src={image.url} alt="img" />
	</span>
{/each}

<style lang="postcss">
	.images {
		@apply relative mb-8 flex flex-col items-center;
	}
	.image_action {
		@apply absolute bottom-4 right-4;
	}
	.action_layout {
		@apply flex flex-row justify-center gap-4;
	}
</style>
