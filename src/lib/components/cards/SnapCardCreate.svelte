<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();
	let is_hovered = false;

	function clickSnapCardCreate(event) {
		dispatch('clickSnapCardCreate', event);
	}
</script>

<div class="snapCardCreate-wrapper">
	<button
		class="snapCardCreate"
		on:click={clickSnapCardCreate}
		on:mouseenter={() => (is_hovered = true)}
		on:mouseleave={() => (is_hovered = false)}
		on:keypress={e => {
			//TODO: need to design how this will work A11y
		}}
	>
		<span>
			<Icon
				name="snap_creation_v2"
				class={is_hovered
					? 'cursor_pointer fill_primary_purple'
					: 'cursor_pointer fill_castle_grey'}
				viewSize={{width: '64', height: '64'}}
				clickable={false}
				size="3rem"
			/>
			<p>Publish a new snap</p>
		</span>
	</button>
</div>

<style lang="postcss">
	.snapCardCreate-wrapper {
		@apply relative w-full mb-7;
		padding-bottom: 75%;
	}
	.snapCardCreate {
		@apply bg-black-a border border-castle-grey rounded text-moon-grey
		flex justify-center items-center drop-shadow-md cursor-pointer absolute w-full h-full;
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
