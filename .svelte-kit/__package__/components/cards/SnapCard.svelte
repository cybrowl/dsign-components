<script>
	import {fade} from 'svelte/transition';
	import {get} from 'lodash';
	import {createEventDispatcher} from 'svelte';

	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();

	export let snap = {
		likeActive: false
	};
	export let showEditMode = false;
	export let showUsername = false;

	let imgLoadFailed = false;

	const username = get(snap, 'username', '');
	const snap_images = get(snap, 'images', []);
	const snap_image_cover = get(snap, 'image_cover_location', 0);

	const snap_url =
		(snap_images.length > 0 && snap_images[snap_image_cover]?.url) || '';

	function select_card() {
		snap.isSelected = !snap.isSelected;
	}

	function handleError() {
		imgLoadFailed = true;
	}
</script>

<!-- Snap -->
<button
	class="card"
	on:click={() => {
		if (showEditMode) {
			select_card();
		} else {
			dispatch('clickCard', snap);
		}
	}}
	on:keypress={e => {
		//TODO: need to design how this will work A11y
	}}
>
	<div class="img">
		{#if imgLoadFailed === true}
			<div class="img_error">
				<p>Owner Removed Image</p>
			</div>
		{:else}
			<img
				class="img-content"
				class:edit_mode={showEditMode === true}
				src={snap_url}
				on:error={handleError}
				alt="snap"
				in:fade
			/>
		{/if}

		<!-- Unselected -->
		{#if showEditMode && snap.isSelected === false}
			<span class="checkmark">
				<Icon name="unchecked" width="32" height="32" />
			</span>
		{/if}

		<!-- Selected -->
		{#if showEditMode && snap.isSelected}
			<span class="checkmark">
				<Icon name="checkmark" width="32" height="32" />
			</span>
		{/if}
	</div>

	{#if showUsername}
		<span class="username">
			{#if username.length > 12}
				<a href={`/${username}`}>{username.slice(0, 12)}...</a>
			{:else}
				<a href={`/${username}`}>{username}</a>
			{/if}
		</span>
	{/if}

	<div class="name">
		<p>{snap.name}</p>
	</div>
</button>

<style>
	.card {
		display: flex;
		flex-direction: column;
}
	.img {
		position: relative;
		width: 100%;
		cursor: pointer;
		font-family: Roboto, sans-serif;
}
	.img:hover {
		--tw-shadow: 0 10px 15px -3px rgba(58, 58, 80, 0.5), 0 4px 6px -2px rgba(58, 58, 80, 0.3);
		--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -2px var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
		--tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
	.img {
		height: 0;
		padding-bottom: 75%;
	}
	.img-content {
		position: absolute;
		top: 0px;
		left: 0px;
		height: 100%;
		width: 100%;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
		border-radius: 0.5rem;
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity));
		-o-object-fit: cover;
		   object-fit: cover;
		transition-property: transform;
		transition-duration: 300ms;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
	.img-content:hover {
		--tw-scale-x: 1.1;
		--tw-scale-y: 1.1;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
	.checkmark {
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		height: 2rem;
		width: 2rem;
		border-radius: 9999px;
}
	.edit_mode {
		--tw-bg-opacity: 1;
		background-color: rgb(27 26 34 / var(--tw-bg-opacity));
		opacity: 0.5;
}
	.img_error {
		height: 100%;
		width: 100%;
		border-radius: 0.5rem;
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity));
		text-align: center;
		font-weight: 700;
		--tw-text-opacity: 1;
		color: rgb(112 110 122 / var(--tw-text-opacity));
}
	.img_error p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.username {
		margin-top: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 0.25rem;
		font-family: Roboto, sans-serif;
		--tw-text-opacity: 1;
		color: rgb(243 244 246 / var(--tw-text-opacity));
}
	.username:hover {
		--tw-text-opacity: 1;
		color: rgb(122 113 222 / var(--tw-text-opacity));
}
	.name {
		padding-top: 1rem;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 700;
		font-style: italic;
		--tw-text-opacity: 1;
		color: rgb(235 233 255 / var(--tw-text-opacity));
}
</style>
