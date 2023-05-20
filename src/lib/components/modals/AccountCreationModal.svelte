<script>
	import AccountCreation from '../account_creation/AccountCreation.svelte';
	import AccountCreationSuccess from '../account_creation/AccountCreationSuccess.svelte';
	import Modal from '../basic_elements/Modal.svelte';

	export let createdAccount = false;
	export let errorMessage = '';
	export let hasError = false;
	export let isCreatingAccount = false;
	export let isVisible = true;

	function handleAccountCreation(e) {
		console.log('create account: ', e.detail);
	}
</script>

<Modal isModalLocked={true} on:closeModal={handleAccountCreation}>
	{#if createdAccount}
		{#if isVisible}
			<AccountCreationSuccess />
		{/if}
	{:else}
		<AccountCreation
			on:click={handleAccountCreation}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
			{errorMessage}
			{hasError}
			{isCreatingAccount}
		/>
	{/if}
</Modal>

<style>
</style>
