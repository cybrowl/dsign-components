<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();

	function clickProjectEmpty(event) {
		dispatch('clickProjectEmpty', event);
	}
</script>

<div
	class="projectEmpty"
	on:click={clickProjectEmpty}
	on:keypress={e => {
		//TODO: need to design how this will work A11y
	}}
>
	<span>
		<Icon
			name="project_empty"
			viewSize={{width: '92', height: '92'}}
			size="4rem"
		/>
		<p>No projects found</p>
	</span>
</div>

<style lang="postcss">
	.projectEmpty {
		@apply bg-black-a w-full max-w-xs h-60 border border-castle-grey rounded
        flex justify-center drop-shadow-md cursor-default;
	}
	.projectEmpty span {
		@apply flex flex-col justify-center items-center;
	}
	.projectEmpty > span > p {
		@apply text-castle-grey font-sans font-bold;
	}
</style>
