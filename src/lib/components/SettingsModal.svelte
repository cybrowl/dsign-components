<script>
    import {createEventDispatcher} from 'svelte';
    import Modal from '../components/Modal.svelte';
    import Settings from '../components/Settings.svelte';

    const dispatch = createEventDispatcher();

    export let username = '';

    function handleAvatarChange(e) {
        dispatch('avatarChange');
    }
</script>

<div>
    <Modal centered={false}>
        <Settings on:clickAvatar={handleAvatarChange} {username} />
    </Modal>
</div>

<style>
</style>
