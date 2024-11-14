<script>
	import Feedback from '../components/snap/Feedback.svelte';
	import Modal from '../components/basic_elements/Modal.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let snap = {};

	function handleCloseModal(e) {
		console.log('handleCloseModal');
		dispatch('closeModal');
	}
</script>

<div>
	<Modal modalHeaderVisible={false} on:closeModal={handleCloseModal}>
		<Feedback {snap} />
	</Modal>
</div>

<style>
</style>
