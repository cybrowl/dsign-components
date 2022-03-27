<script>
    import AccountCreation from './AccountCreation.svelte';
    import Modal from '../components/Modal.svelte';

    export let createdAccount = false;
    export let errorMessage = '';
    export let hasError = false;
    export let isCreatingAccount = false;

    function handleAccountCreation(e) {
        console.log('create account: ', e.detail);
    }
</script>

<div>
    <Modal>
        <AccountCreation on:click={handleAccountCreation} {errorMessage} {hasError} {isCreatingAccount} />
    </Modal>
</div>

<style>
</style>
