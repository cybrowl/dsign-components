<script>
	import {fade} from 'svelte/transition';
	import {createEventDispatcher} from 'svelte';

	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();

	export let snap = {
		likeActive: false
	};
	export let showEditMode = false;
	export let showUsername = false;

	let imgLoadFailed = false;

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
				<p>Owner Purged Images</p>
			</div>
		{:else}
			<img
				class="img-content"
				class:edit_mode={showEditMode === true}
				src={snap.images[snap.image_cover_location].url}
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
			{#if snap.username.length > 12}
				<a href={`/${snap.username}`}>{snap.username.slice(0, 12)}...</a>
			{:else}
				<a href={`/${snap.username}`}>{snap.username}</a>
			{/if}
		</span>
	{/if}

	<div class="title">
		<p>{snap.title}</p>
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
		@apply absolute top-0 left-0 bg-black-a object-cover w-full h-full rounded-lg;
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

	.title {
		@apply text-base font-bold text-white pt-1;
	}
</style>
