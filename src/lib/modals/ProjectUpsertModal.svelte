<script>
	import ProjectUpsert from '../components/project/ProjectUpsert.svelte';
	import Modal from '../components/basic_elements/Modal.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let mode_create = false;

	let header = '';
	let project_name_default = '';
	let loading_msg = '';
	let submit_button_label = '';
	let is_sending = false;

	if (mode_create) {
		header = 'Create a Project';
		loading_msg = 'Creating';
		submit_button_label = 'Create';
	} else {
		header = 'Edit Project';
		loading_msg = 'Editing';
		project_name_default = 'Poro';
		submit_button_label = 'Done';
	}

	function handleCloseModal(e) {
		console.log('handleCloseModal');
		dispatch('closeModal');
	}

	function handleSubmit(e) {
		is_sending = !is_sending;
	}
</script>

<div>
	<Modal modalHeaderVisible={false} on:closeModal={handleCloseModal}>
		<ProjectUpsert
			{header}
			{loading_msg}
			{is_sending}
			{project_name_default}
			{submit_button_label}
			on:submit={handleSubmit}
		/>
	</Modal>
</div>

<style>
</style>
