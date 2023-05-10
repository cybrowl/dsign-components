<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();
	let is_hovered = false;

	function clickSnapCardCreate(event) {
		dispatch('clickSnapCardCreate', event);
	}
</script>

<div
	class="snapCardCreate"
	on:click={clickSnapCardCreate}
	on:mouseenter={() => (is_hovered = true)}
	on:mouseleave={() => (is_hovered = false)}
	on:keypress={e => {
		//TODO: need to design how this will work A11y
	}}
>
	<span>
		<Icon name="upload_snap" class={is_hovered ? 'snapCreationActive' : 'snapCreation'} width="89" height="89" />
	</span>
</div>

<style lang="postcss">
	.snapCardCreate {
		@apply bg-black-a w-full max-w-xs h-56 border border-castle-grey rounded
        flex justify-center drop-shadow-md cursor-pointer;
	}
	.snapCardCreate span {
		@apply flex flex-col justify-center items-center;
	}
	.snapCardCreate:hover {
		@apply border-primary-purple text-primary-purple;
	}
	.snapCardCreate:focus-visible {
		@apply ring-2 ring-primary-purple;
	}
	.snapCardCreate:focus {
		@apply outline-none;
	}
</style>
