<script>
    import {createEventDispatcher} from 'svelte';
    import AccountSettings from '../components/AccountSettings.svelte';
    import Modal from '../components/Modal.svelte';

    const dispatch = createEventDispatcher();

    export let avatar = '';
    export let username = '';
    export let triggerInputEvent = false;

    function handleAvatarChange(e) {
        dispatch('avatarChange');
    }
</script>

<div>
    <Modal>
        <AccountSettings {avatar} {username} {triggerInputEvent} on:clickAvatar={handleAvatarChange} />
    </Modal>
</div>

<style>
</style>
