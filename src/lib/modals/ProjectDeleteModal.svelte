<script>
	import ProjectDelete from '../components/project/ProjectDelete.svelte';
	import Modal from '../components/basic_elements/Modal.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	let project_name = 'AstraKey';
	let is_deleting_project = false;

	function handleCloseModal(e) {
		console.log('handleCloseModal');
		dispatch('closeModal');
	}

	function handleDeleteProject(e) {
		is_deleting_project = !is_deleting_project;
	}
</script>

<div>
	<Modal on:closeModal={handleCloseModal}>
		<ProjectDelete
			{project_name}
			{is_deleting_project}
			on:clickDelete={handleDeleteProject}
		/>
	</Modal>
</div>

<style>
</style>
