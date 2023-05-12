<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();
	let is_hovered = false;

	function clickProjectCardCreate(event) {
		dispatch('clickProjectCardCreate', event);
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			clickProjectCardCreate(e);
		}
	}
</script>

<div
	class="projectCardCreate"
	on:click={clickProjectCardCreate}
	on:mouseenter={() => (is_hovered = true)}
	on:mouseleave={() => (is_hovered = false)}
	on:keydown={handleKeyPress}
	tabindex="0"
	role="button"
	aria-label="Start a new project"
>
	<span>
		<Icon
			name="project_creation"
			class={is_hovered
				? 'cursor_pointer fill_primary_purple'
				: 'cursor_pointer fill_castle_grey'}
			viewSize={{width: '80', height: '80'}}
			size="4rem"
		/>
		<p>Start a new project</p>
	</span>
</div>

<style lang="postcss">
	.projectCardCreate {
		@apply bg-black-a w-full max-w-xs border border-castle-grey rounded h-60
        flex justify-center drop-shadow-md cursor-pointer text-moon-grey font-sans mb-12;
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
