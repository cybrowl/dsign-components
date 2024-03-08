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

<style lang="postcss">
	.card {
		@apply flex flex-col;
	}
	.img {
		@apply relative font-sans cursor-pointer w-full hover:drop-shadow-md hover:shadow-gray;
		height: 0;
		padding-bottom: 75%;
	}
	.img-content {
		@apply absolute top-0 left-0 bg-black-a w-full h-full rounded-lg object-cover 
		transform scale-100 transition-transform duration-300 ease-in-out hover:scale-110;
	}

	.checkmark {
		@apply absolute top-2 left-2 w-8 h-8 rounded-full;
	}
	.edit_mode {
		@apply bg-backdrop opacity-50;
	}

	.img_error {
		@apply bg-black-a w-full h-full rounded-lg text-castle-grey font-bold text-center;
	}

	.img_error p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.username {
		@apply gap-1 flex flex-col justify-start mt-2 font-sans text-gray-100 hover:text-primary-purple;
	}

	.name {
		@apply text-base font-bold text-cloud-purple pt-4 italic;
	}
</style>
