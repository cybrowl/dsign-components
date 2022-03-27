<script>
    import AccountCreation from './AccountCreation.svelte';
    import AccountCreationSuccess from './AccountCreationSuccess.svelte';
    import Modal from '../components/Modal.svelte';

    export let createdAccount = false;
    export let errorMessage = '';
    export let hasError = false;
    export let isCreatingAccount = false;
    export let isVisible = true;

    function handleAccountCreation(e) {
        console.log('create account: ', e.detail);
    }

    setTimeout(function () {
        isVisible = false;
    }, 2000);
</script>

<div>
    <Modal modalHeaderVisible={!createdAccount} on:closeModal={handleAccountCreation}>
        {#if createdAccount}
            {#if isVisible}
                <AccountCreationSuccess />
            {/if}
        {:else}
            <AccountCreation on:click={handleAccountCreation} {errorMessage} {hasError} {isCreatingAccount} />
        {/if}
    </Modal>
</div>

<style>
</style>
