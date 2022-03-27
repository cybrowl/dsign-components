<script>
    import AccountCreation from './AccountCreation.svelte';
    import AccountCreationSuccess from './AccountCreationSuccess.svelte';
    import Modal from '../components/Modal.svelte';

    export let createdAccount = false;
    export let errorMessage = '';
    export let hasError = false;
    export let isCreatingAccount = false;
    export let closeModalAfterNumSecs = false;

    function handleAccountCreation(e) {
        console.log('create account: ', e.detail);
    }
</script>

<div>
    <Modal modalHeaderVisible={!createdAccount} {closeModalAfterNumSecs}>
        {#if createdAccount}
            <AccountCreationSuccess />
        {:else}
            <AccountCreation on:click={handleAccountCreation} {errorMessage} {hasError} {isCreatingAccount} />
        {/if}
    </Modal>
</div>

<style>
</style>
