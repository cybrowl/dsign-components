<script>
	import AccountSettings from '../components/account_settings/AccountSettings.svelte';
	import Modal from '../components/basic_elements/Modal.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let avatar = '';
	export let username = '';

	function handleAvatarChange(e) {
		dispatch('avatarChange');
	}
	function handleCloseModal(e) {
		console.log('handleCloseModal');
		dispatch('closeModal');
	}
</script>

<div>
	<Modal on:closeModal={handleCloseModal}>
		<AccountSettings {avatar} {username} on:clickAvatar={handleAvatarChange} />
	</Modal>
</div>

<style>
</style>
