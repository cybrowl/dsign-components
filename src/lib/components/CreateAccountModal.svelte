<script>
    import Modal from '../components/Modal.svelte';
    import CreateUsername from '../components/CreateUsername.svelte';

    export let errorMessage = '';
    export let hasError = false;
    export let isCreatingAccount = false;

    function createUsername(e) {
        console.log('create_username: ', e.detail);
    }
</script>

<div>
    <Modal>
        <CreateUsername on:click={createUsername} {errorMessage} {hasError} {isCreatingAccount} />
    </Modal>
</div>

<style>
</style>
