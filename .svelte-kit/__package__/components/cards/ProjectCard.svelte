<script>
	import {fade} from 'svelte/transition';
	import {get} from 'lodash';
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
	export let optionsPopover = {
		edit: false,
		delete: false
	};

	export let isOptionsPopoverOpen = false;
	let mouseOverProjectCard = false;

	const snap_images = get(project, 'snaps.images', []);

	function clickProject() {
		if (!isOptionsPopoverOpen) {
			dispatch('clickProject', project);
		}
	}

	function handleClickUsername() {
		if (!isOptionsPopoverOpen) {
			dispatch('clickUsername', project);
		}
	}

	function handleEditProject() {
		dispatch('editProject', project);
	}

	function handleDeleteProject() {
		dispatch('deleteProject', project);
	}
</script>

{#if isLoadingProject}
	<div class="projectCardLoading">
		<div class="projectCardLoadingImg" />
	</div>
{:else}
	<div class="projectCard-wrapper">
		<div
			class="projectCard"
			class:move-modal-preview={isMoveModal === true}
			on:click={clickProject}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
			role="button"
			tabindex="0"
			alt="project"
			on:mouseenter={() => (mouseOverProjectCard = true)}
			on:mouseleave={() => (mouseOverProjectCard = false)}
		>
			{#if (mouseOverProjectCard || isOptionsPopoverOpen) && showOptionsPopover}
				<span
					class="options"
					on:keypress={e => {
						//TODO: need to design how this will work A11y
					}}
					role="button"
					tabindex="0"
				>
					<Icon
						class="cursor_pointer fill_dark_grey hover_grey"
						name="options"
						on:click={() => (isOptionsPopoverOpen = true)}
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
						role="dialog"
						aria-labelledby="optionsPopoverLabel"
					>
						<span>
							{#if optionsPopover.edit}
								<button
									on:click={handleEditProject}
									on:keypress={e => {
										//TODO: need to design how this will work A11y
									}}>Edit</button
								>
							{/if}
							{#if optionsPopover.delete}
								<button
									on:click={handleDeleteProject}
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
						src={get(
							snap,
							`images[${snap.image_cover_location}].url`,
							'/empty_project.png'
						)}
						class:fill-grid={project.snaps.length === 1}
						class:row-full={project.snaps.length === 2}
						class:col-full={(project.snaps.length === 3) & (index === 0)}
						class:card-rounded-l={project.snaps.length === 2 && index === 0}
						class:card-rounded-r={project.snaps.length === 2 && index === 1}
						class:card-rounded-bl={(project.snaps.length === 3) &
							(index === 1) || (project.snaps.length === 4) & (index === 2)}
						class:card-rounded-br={(project.snaps.length === 3) &
							(index === 2) || (project.snaps.length === 4) & (index === 3)}
						class:card-rounded-tr={(project.snaps.length === 4) & (index === 1)}
						class:card-rounded-tl={(project.snaps.length === 4) & (index === 0)}
						alt="snap"
						in:fade
					/>
				{/if}
				{#if project.snaps.length > 4}
					{#if index < 3}
						<img
							src={get(
								snap,
								`images[${snap.image_cover_location}].url`,
								'/empty_project.png'
							)}
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
								src={get(
									snap,
									`images[${snap.image_cover_location}].url`,
									'/empty_project.png'
								)}
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
					role="button"
					tabindex="0"
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
						<button
							on:click={handleClickUsername}
							on:mouseenter={() => (mouseOverProjectCard = false)}
							on:mouseleave={() => (mouseOverProjectCard = true)}
						>
							{project.username}</button
						>
					{/if}
				</span>
			{/if}
		</div>
	</div>
{/if}

<style>
	.projectCardLoading {
		position: relative;
		padding-bottom: 100%
}

	.projectCardLoadingImg {
		position: absolute;
		height: 83.333333%;
		width: 100%
}

	@keyframes pulse {

		50% {
				opacity: .5
		}
}

	.projectCardLoadingImg {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		border-radius: 0.375rem;
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity))
}

	.projectCard-wrapper {
		position: relative;
		width: 100%;
		padding-bottom: 100%
}

	.projectCard {
		position: absolute;
		display: grid;
		height: 100%;
		width: 100%;
		cursor: pointer;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-template-rows: repeat(2, minmax(0, 1fr));
		gap: 0.25rem;
		font-family: Roboto, sans-serif;
		--tw-text-opacity: 1;
		color: rgb(203 213 225 / var(--tw-text-opacity))
}

	.emptyProject {
		border-width: 1px;
		border-style: solid;
		--tw-border-opacity: 1;
		border-color: rgb(112 110 122 / var(--tw-border-opacity))
}

	.move-modal-preview {
		margin: 0.5rem;
		width: 16.666667%;
		gap: 0px
}

	@media (min-width: 1024px) {

		.move-modal-preview {
				height: 5rem;
				max-height: 5rem
		}
}

	@media (min-width: 1536px) {

		.move-modal-preview {
				height: 5rem;
				max-height: 5rem
		}
}

	.options {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		z-index: 10
}

	.optionsPopover {
		position: absolute;
		top: 2.75rem;
		right: 0.5rem;
		z-index: 20;
		width: 8rem;
		border-radius: 0.5rem;
		--tw-bg-opacity: 1;
		background-color: rgb(50 49 61 / var(--tw-bg-opacity));
		padding: 1rem
}

	.optionsPopover span {
		display: flex;
		flex-direction: column;
		gap: 0.5rem
}

	.optionsPopover button:hover {
		--tw-text-opacity: 1;
		color: rgb(182 175 252 / var(--tw-text-opacity))
}

	.projectCardDetails p:nth-child(2) {
		font-size: 0.875rem;
		line-height: 1.25rem
}

	.projectCardDetails button:hover {
		--tw-text-opacity: 1;
		color: rgb(182 175 252 / var(--tw-text-opacity));
		text-decoration-line: underline;
		text-underline-offset: 4px
}

	.change-project-color {
		--tw-text-opacity: 1;
		color: rgb(182 175 252 / var(--tw-text-opacity))
}

	.row-full {
		grid-row: 1 / -1
}

	.col-full {
		grid-column: 1 / -1;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem
}

	.card-rounded-l {
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem
}

	.card-rounded-r {
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem
}

	.card-rounded-tl {
		border-top-left-radius: 0.5rem
}

	.card-rounded-tr {
		border-top-right-radius: 0.5rem
}

	.card-rounded-bl {
		border-bottom-left-radius: 0.5rem
}

	.card-rounded-br {
		border-bottom-right-radius: 0.5rem
}

	.fill-grid {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		border-radius: 0.5rem
}

	.overlay-container {
		position: relative;
		height: 100%;
		width: 100%
}

	.overlay-container img {
		height: 100%;
		width: 100%;
		-o-object-fit: cover;
		   object-fit: cover
}

	.overlay-count {
		position: absolute;
		z-index: 10;
		height: 100%;
		width: 100%;
		--tw-bg-opacity: 1;
		background-color: rgb(112 110 122 / var(--tw-bg-opacity));
		opacity: 0.8
}

	.overlay-count-text {
		position: absolute;
		z-index: 10;
		font-family: Roboto, sans-serif;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%)
}

	.projectCard > img {
		height: 100%;
		width: 100%;
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity));
		-o-object-fit: cover;
		   object-fit: cover
}
</style>
