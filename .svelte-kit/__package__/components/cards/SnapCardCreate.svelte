<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();
	let is_hovered = false;

	function clickSnapCardCreate(event) {
		dispatch('clickSnapCardCreate', event);
	}
</script>

<div class="snapCardCreate-wrapper">
	<button
		class="snapCardCreate"
		on:click={clickSnapCardCreate}
		on:mouseenter={() => (is_hovered = true)}
		on:mouseleave={() => (is_hovered = false)}
		on:keypress={e => {
			//TODO: need to design how this will work A11y
		}}
	>
		<span>
			<Icon
				name="snap_creation_v2"
				class={is_hovered
					? 'cursor_pointer fill_primary_purple'
					: 'cursor_pointer fill_castle_grey'}
				viewSize={{width: '64', height: '64'}}
				clickable={false}
				size="3rem"
			/>
			<p>Publish a new snap</p>
		</span>
	</button>
</div>

<style>
	.snapCardCreate-wrapper {
		position: relative;
		margin-bottom: 1.75rem;
		width: 100%;
		padding-bottom: 75%
}
	.snapCardCreate {
		position: absolute;
		display: flex;
		height: 100%;
		width: 100%;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		border-radius: 0.25rem;
		border-width: 1px;
		--tw-border-opacity: 1;
		border-color: rgb(112 110 122 / var(--tw-border-opacity));
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity));
		--tw-text-opacity: 1;
		color: rgb(198 196 204 / var(--tw-text-opacity));
		--tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
	.snapCardCreate span {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center
}
	.snapCardCreate:hover {
		--tw-border-opacity: 1;
		border-color: rgb(122 113 222 / var(--tw-border-opacity));
		--tw-text-opacity: 1;
		color: rgb(122 113 222 / var(--tw-text-opacity))
}
	.snapCardCreate:focus-visible {
		--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
		--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
		box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
		--tw-ring-opacity: 1;
		--tw-ring-color: rgb(122 113 222 / var(--tw-ring-opacity))
}
	.snapCardCreate:focus {
		outline: 2px solid transparent;
		outline-offset: 2px
}
</style>
