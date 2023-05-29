<script>
	import Button from '../basic_elements/Button.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let project_name = '';
	export let is_deleting_project = false;

	function handleDelete() {
		dispatch('delete');
	}
</script>

<div class="project_delete">
	<h2>Are you sure?</h2>
	<p>
		This will delete <u><strong>{project_name}</strong></u>
		<strong>including</strong> all snaps in project.
	</p>
	<span>
		<Button
			label="Delete"
			destroy={true}
			destroyDisabled={is_deleting_project}
			on:click={handleDelete}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		/>
	</span>
</div>

<style lang="postcss">
	.project_delete {
		@apply font-sans text-white pt-10 flex flex-col ml-8 min-w-[500px] min-h-[230px];
	}
	.project_delete h2 {
		@apply text-2xl font-bold mb-4;
	}
	.project_delete span {
		@apply absolute right-4 bottom-4;
	}
</style>
