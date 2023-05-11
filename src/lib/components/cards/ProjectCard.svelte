<script>
	import {fade} from 'svelte/transition';
	import {createEventDispatcher} from 'svelte';
	import Icon from '../basic_elements/Icon.svelte';

	import {clickOutside} from '../../utils/utils';

	const dispatch = createEventDispatcher();

	export let project = {
		snaps: []
	};

	export let isLoadingProject = false;
	export let hideDetails = false;
	export let hideSnapsCount = false;
	export let showUsername = false;
	export let isMoveModal = false;
	export let showOptionsPopover = false;
	export let optionsPopoverHide = {
		rename: false,
		delete: false
	};

	export let isOptionsPopoverOpen = false;
	let mouseOverProjectCard = false;

	function clickProject() {
		console.log('project');
		if (!isOptionsPopoverOpen) {
			dispatch('clickProject', project);
		}
	}

	function clickRenameProject() {
		dispatch('clickRenameProject', project);
	}

	function clickDeleteProject() {
		dispatch('clickDeleteProject', project);
	}
</script>

{#if isLoadingProject}
	<div class="projectCardLoading">
		<div class="projectCardLoadingImg" />
		<span class="projectCardLoadingDetails">
			<span />
			<span />
		</span>
	</div>
{:else}
	<div
		class="projectCard"
		class:move-modal-preview={isMoveModal === true}
		on:click={clickProject}
		on:keypress={e => {
			//TODO: need to design how this will work A11y
		}}
		alt="project"
		on:mouseenter={() => (mouseOverProjectCard = true)}
		on:mouseleave={() => (mouseOverProjectCard = false)}
	>
		{#if (mouseOverProjectCard || isOptionsPopoverOpen) && showOptionsPopover}
			<span
				class="options"
				on:click={() => (isOptionsPopoverOpen = true)}
				on:keypress={e => {
					//TODO: need to design how this will work A11y
				}}
			>
				<Icon
					class="cursor_pointer fill_dark_grey hover_grey"
					name="options"
					viewSize={{
						width: '40',
						height: '40'
					}}
				/>
			</span>
			{#if isOptionsPopoverOpen}
				<div
					class="optionsPopover"
					use:clickOutside
					on:click_outside={() => (isOptionsPopoverOpen = false)}
					on:keypress={e => {
						//TODO: need to design how this will work A11y
					}}
				>
					<span>
						{#if optionsPopoverHide.rename === false}
							<button
								on:click={clickRenameProject}
								on:keypress={e => {
									//TODO: need to design how this will work A11y
								}}>Rename</button
							>
						{/if}
						{#if optionsPopoverHide.delete === false}
							<button
								on:click={clickDeleteProject}
								on:keypress={e => {
									//TODO: need to design how this will work A11y
								}}>Delete</button
							>
						{/if}
					</span>
				</div>
			{/if}
		{/if}

		{#each project.snaps as snap, index}
			{#if project.snaps.length < 5}
				<img
					src={snap.images[snap.image_cover_location].url}
					class:fill-grid={project.snaps.length === 1}
					class:row-full={project.snaps.length === 2}
					class:col-full={(project.snaps.length === 3) & (index === 0)}
					class:card-rounded-l={project.snaps.length === 2 && index === 0}
					class:card-rounded-r={project.snaps.length === 2 && index === 1}
					class:card-rounded-bl={(project.snaps.length === 3) & (index === 1) ||
						(project.snaps.length === 4) & (index === 2)}
					class:card-rounded-br={(project.snaps.length === 3) & (index === 2) ||
						(project.snaps.length === 4) & (index === 3)}
					class:card-rounded-tr={(project.snaps.length === 4) & (index === 1)}
					class:card-rounded-tl={(project.snaps.length === 4) & (index === 0)}
					alt="snap"
					in:fade
				/>
			{/if}
			{#if project.snaps.length > 4}
				{#if index < 3}
					<img
						src={snap.images[snap.image_cover_location].url}
						class:card-rounded-bl={index === 2}
						class:card-rounded-tl={index === 0}
						class:card-rounded-tr={index === 1}
						alt="snap"
						in:fade
					/>
				{/if}
				{#if index === 3}
					<div class="overlay-container">
						<span class="overlay-count" class:card-rounded-br={true} />
						<p class="overlay-count-text">+ {project.snaps.length}</p>
						<img
							src={snap.images[snap.image_cover_location].url}
							class:card-rounded-br={true}
							alt="snap"
							in:fade
						/>
					</div>
				{/if}
			{/if}
		{/each}

		{#if project.snaps.length === 0}
			<img
				src="/empty_project.png"
				alt="account created"
				class:fill-grid={true}
				class="emptyProject"
			/>
		{/if}

		{#if !hideDetails}
			<span
				class="projectCardDetails"
				on:click|stopPropagation
				on:keypress={e => {
					//TODO: need to design how this will work A11y
				}}
			>
				<p class:change-project-color={mouseOverProjectCard === true}>
					{project.name}
				</p>

				{#if !hideSnapsCount}
					{#if project.snaps.length > 1 || project.snaps.length === 0}
						<p>{project.snaps.length} snaps</p>
					{:else}
						<p>{project.snaps.length} snap</p>
					{/if}
				{/if}

				{#if showUsername}
					<a
						href={`/${project.username}`}
						on:mouseenter={() => (mouseOverProjectCard = false)}
						on:mouseleave={() => (mouseOverProjectCard = true)}
					>
						{project.username}</a
					>
				{/if}
			</span>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.projectCardLoading {
		@apply relative font-sans cursor-pointer w-full max-w-xs h-56;
	}

	.projectCardLoadingImg {
		@apply bg-black-a w-full h-full relative animate-pulse rounded-md;
	}

	.projectCardLoadingDetails {
		@apply flex flex-col gap-y-2 mt-2;
	}

	.projectCardLoadingDetails > span {
		@apply bg-black-a h-3 w-20;
	}

	.projectCard {
		@apply relative font-sans cursor-pointer grid grid-cols-2 grid-rows-2 gap-1 text-slate-300
        lg:h-72 lg:max-h-72 2xl:h-96 2xl:max-h-96;
	}

	.emptyProject {
		border: 0.5px solid #706e7a;
	}

	.move-modal-preview {
		@apply gap-0 m-2 w-2/12 lg:h-20 lg:max-h-20 2xl:h-20 2xl:max-h-20;
	}

	.options {
		@apply absolute top-2 right-2 z-10;
	}

	.optionsPopover {
		@apply absolute top-10 right-4 z-20 w-32 bg-dark-grey rounded-lg p-4;
	}

	.optionsPopover button {
		@apply mb-2;
	}

	.optionsPopover span {
		@apply flex flex-col;
	}

	.optionsPopover button:hover {
		@apply text-bubble-purple;
	}

	.projectCardDetails p:nth-child(2) {
		@apply text-sm;
	}

	.projectCardDetails a:hover {
		@apply text-yellow-300;
	}

	.change-project-color {
		@apply text-bubble-purple;
	}

	.row-full {
		@apply row-span-full;
	}

	.col-full {
		@apply col-span-full rounded-t-lg;
	}

	.card-rounded-l {
		@apply rounded-l-lg;
	}

	.card-rounded-r {
		@apply rounded-r-lg;
	}

	.card-rounded-tl {
		@apply rounded-tl-lg;
	}

	.card-rounded-tr {
		@apply rounded-tr-lg;
	}

	.card-rounded-bl {
		@apply rounded-bl-lg;
	}

	.card-rounded-br {
		@apply rounded-br-lg;
	}

	.fill-grid {
		@apply row-span-full col-span-full rounded-lg;
	}

	.overlay-container {
		@apply relative w-full h-full;
	}

	.overlay-container img {
		@apply w-full h-full object-cover;
	}

	.overlay-count {
		@apply bg-castle-grey z-10 h-full w-full absolute opacity-80;
	}

	.overlay-count-text {
		@apply font-sans absolute z-10;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.projectCard > img {
		@apply w-full h-full object-cover bg-black-a;
	}
</style>
