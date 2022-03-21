<script>
    import Modal from '../components/Modal.svelte';
    import CreateUsername from '../components/CreateUsername.svelte';

    function createUsername(e) {
        console.log('create_username: ', e.detail);
    }
</script>

<div>
    <Modal>
        <CreateUsername on:click={createUsername} />
    </Modal>
</div>

<style>
</style>
