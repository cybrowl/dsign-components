<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();
	let is_hovered = false;

	function handleProjectCreation(event) {
		dispatch('createProject', event);
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			handleProjectCreation(e);
		}
	}
</script>

<div class="projectCardCreate-wrapper">
	<button
		class="projectCardCreate"
		on:click={handleProjectCreation}
		on:mouseenter={() => (is_hovered = true)}
		on:mouseleave={() => (is_hovered = false)}
		on:keydown={handleKeyPress}
		tabindex="0"
		aria-label="Start a new project"
	>
		<span>
			<Icon
				name="project_creation"
				clickable={false}
				class={is_hovered
					? 'cursor_pointer fill_primary_purple'
					: 'cursor_pointer fill_castle_grey'}
				viewSize={{width: '80', height: '80'}}
				size="4rem"
			/>
			<p>Start a new project</p>
		</span>
	</button>
</div>

<style lang="postcss">
	.projectCardCreate-wrapper {
		@apply relative w-full mb-12;
	}
	.projectCardCreate {
		@apply bg-black-a w-full border border-castle-grey rounded text-moon-grey
        flex justify-center items-center drop-shadow-md cursor-pointer;
		@apply absolute w-full h-full;
	}
	.projectCardCreate:hover {
		@apply border-primary-purple text-primary-purple;
	}
	.projectCardCreate:focus {
		@apply outline-none;
	}
	.projectCardCreate:focus-visible {
		@apply ring-2 ring-primary-purple;
	}
	.projectCardCreate span {
		@apply flex flex-col justify-center items-center;
	}
</style>
