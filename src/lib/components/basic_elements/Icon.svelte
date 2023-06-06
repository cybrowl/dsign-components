<script>
	import * as icons from './icons';
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let name;
	export let clickable = true;
	export let focusable = false;
	export let viewSize = {
		width: 24,
		height: 24
	};

	export let size = '2rem'; // size is now used for both width and height
	export let scale = 1; // scale factor, adjust this to scale the icon
	export let viewbox = {
		width: viewSize.width / scale,
		height: viewSize.height / scale
	};

	function onClick(event) {
		event.stopPropagation();

		dispatch('click', event);
	}
</script>

{#if clickable}
	<button on:click={onClick}>
		<svg
			class={$$props.class}
			{focusable}
			width={size}
			height={size}
			viewBox={`0 0 ${viewbox.width} ${viewbox.height}`}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			{@html icons[name]}
		</svg>
	</button>
{:else}
	<span>
		<svg
			class={$$props.class}
			{focusable}
			width={size}
			height={size}
			viewBox={`0 0 ${viewbox.width} ${viewbox.height}`}
		>
			{@html icons[name]}
		</svg>
	</span>
{/if}

<style lang="postcss">
	.cursor_pointer {
		@apply cursor-pointer;
	}
	.cursor_default {
		@apply cursor-default;
	}
	.fill_white {
		@apply fill-slate-50;
	}
	.fill_dark_grey {
		@apply fill-dark-grey;
	}
	.fill_primary_purple {
		@apply fill-primary-purple;
	}
	.fill_castle_grey {
		@apply fill-castle-grey;
	}
	.fill_smokey_grey {
		@apply fill-smoky-grey;
	}
	.fill_none {
		@apply fill-none;
	}

	.hover_bubble_purple:hover {
		@apply fill-bubble-purple;
	}
	.hover_primary_purple:hover {
		@apply fill-primary-purple;
	}
	.hover_tulip_purple:hover {
		@apply fill-tulip-purple;
	}
	.hover_grey:hover {
		@apply fill-grey;
	}
	.hover_smoky_grey:hover {
		@apply fill-smoky-grey;
	}

	.editAvatar {
		@apply absolute top-0 right-0;
	}

	.responsive_icon {
		@apply w-16 h-16 lg:w-11 lg:h-11 3xl:w-11 3xl:h-11;
	}
</style>
