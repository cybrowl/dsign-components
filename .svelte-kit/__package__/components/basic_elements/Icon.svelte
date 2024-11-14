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
			role="button"
			tabindex="0"
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

<style>
	.cursor_pointer {
    cursor: pointer
}
	.cursor_default {
    cursor: default
}
	.fill_white {
    fill: #f8fafc
}
	.fill_dark_grey {
    fill: #32313D
}
	.fill_primary_purple {
    fill: #7A71DE
}
	.fill_castle_grey {
    fill: #706E7A
}
	.fill_smokey_grey {
    fill: #454352
}
	.fill_none {
    fill: none
}
	.hover_bubble_purple:hover {
    fill: #B6AFFC
}
	.hover_primary_purple:hover {
    fill: #7A71DE
}
	.hover_tulip_purple:hover {
    fill: #6259C8
}
	.hover_grey:hover {
    fill: #5A5866
}
	.hover_smoky_grey:hover {
    fill: #454352
}
	.editAvatar {
    position: absolute;
    top: 0px;
    right: 0px
}
	.responsive_icon {
    height: 4rem;
    width: 4rem
}
	@media (min-width: 1024px) {
    .responsive_icon {
        height: 2.75rem;
        width: 2.75rem
    }
}
	@media (min-width: 2222px) {
    .responsive_icon {
        height: 2.75rem;
        width: 2.75rem
    }
}
	.add_tags {
    position: absolute;
    left: 0.5rem;
    top: 50%;
    z-index: 20;
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
</style>
