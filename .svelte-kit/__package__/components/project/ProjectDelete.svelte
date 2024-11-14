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

<style>
	.project_delete {
    margin-left: 2rem;
    display: flex;
    min-height: 230px;
    min-width: 500px;
    flex-direction: column;
    padding-top: 2.5rem;
    font-family: Roboto, sans-serif;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.project_delete h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700
}
	.project_delete span {
    position: absolute;
    right: 1rem;
    bottom: 1rem
}
</style>
