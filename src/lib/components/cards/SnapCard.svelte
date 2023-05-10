<script>
	import {fade} from 'svelte/transition';
	import {createEventDispatcher} from 'svelte';

	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();

	export let snap = {
		likeActive: false,
		metrics: {
			likes: 0,
			views: 0
		}
	};

	export let isEditMode = false;
	export let isLoadingSnap = false;
	// export let showMetrics = true;
	// export let showMetricLikesNumber = true;
	export let showUsername = false;

	let imageLoadingFailed = false;

	function select_card() {
		snap.isSelected = !snap.isSelected;
	}

	function clickLike() {
		snap.metrics.likes = Number(snap.metrics.likes) + 1;

		snap.likeActive = true;

		dispatch('clickLike', snap);
	}

	function handleError() {
		imageLoadingFailed = true;
	}
</script>

{#if isLoadingSnap}
	<div class="snapCardLoading">
		<div class="snapCardLoadingImg" />
		<span class="metrics">
			<!-- <span>
                <Icon name="like" width="16" height="16" class="like" />
                {#if showMetricLikesNumber}
                    <span class="count">{snap.metrics.likes}</span>
                {/if}
            </span> -->
			<!-- <span>
                <Icon name="visibility" width="16" height="16" />
                <span class="count">{snap.metrics.views}</span>
            </span> -->
		</span>
	</div>
{:else}
	<div>
		<!-- Image -->
		<div
			class="snapCardImg"
			on:click={() => {
				if (isEditMode) {
					select_card();
				} else {
					dispatch('clickCard', snap);
				}
			}}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			{#if imageLoadingFailed === true}
				<div class="snapCardImgError">
					<p>Owner Purged Images</p>
				</div>
			{:else}
				<img
					class={isEditMode === true ? 'editModeSnapCard' : ''}
					src={snap.images[snap.image_cover_location].url}
					on:error={handleError}
					alt="snap"
					in:fade
				/>
			{/if}

			<!-- Unselected -->
			{#if isEditMode && snap.isSelected === false}
				<span class="checkmark">
					<Icon name="unchecked" width="32" height="32" />
				</span>
			{/if}

			<!-- Selected -->
			{#if isEditMode && snap.isSelected}
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
		<!-- Metrics -->
		<!-- {#if showMetrics}
            <span class="metrics">
                <span
                    on:click={clickLike}
                    on:keypress={e => {
                        //TODO: need to design how this will work A11y
                    }}
                >
                    <Icon name="like" width="16" height="16" class={snap.likeActive ? 'likeActive' : 'like'} />

                    {#if showMetricLikesNumber}
                        <span class="count">{snap.metrics.likes}</span>
                    {/if}
                </span> -->
		<!-- <span>
                <Icon name="visibility" width="16" height="16" />
                <span class="count">{snap.metrics.views}</span>
            </span> -->
		<!-- </span>
        {/if} -->
	</div>
{/if}

<style lang="postcss">
	.snapCardLoading {
		@apply relative font-sans cursor-pointer w-full max-w-xs h-56;
	}

	.snapCardLoadingImg {
		@apply bg-black-a w-full h-full relative animate-pulse rounded-md;
	}

	.snapCardImgError {
		@apply bg-black-a w-full h-full rounded-lg text-castle-grey font-bold text-center;
	}

	.snapCardImgError p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.snapCardImg {
		@apply relative font-sans cursor-pointer w-full max-w-xs h-56;
	}

	.snapCardImg > img {
		@apply bg-black-a object-cover w-full h-full rounded-lg;
	}

	.checkmark {
		@apply absolute top-2 left-2 w-8 h-8 rounded-full;
	}

	.editModeSnapCard {
		background: #1b1a22;
		opacity: 0.5;
	}

	.username {
		@apply gap-1 float-left mt-2 font-sans text-gray-100 hover:text-primary-purple;
	}

	.title {
		@apply text-base font-bold text-white pt-1;
	}

	/* .metrics {
        @apply gap-1 float-right mt-2 cursor-pointer;
    }

    .metrics span {
        @apply flex gap-0.5 font-sans font-bold text-gray-100 text-xs;
    } */
</style>
