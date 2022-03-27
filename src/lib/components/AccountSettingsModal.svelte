<script>
    import {createEventDispatcher} from 'svelte';
    import AccountSettings from './AccountSettings.svelte';
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
    <Modal centered={false}>
        <AccountSettings {avatar} {username} {triggerInputEvent} on:clickAvatar={handleAvatarChange} />
    </Modal>
</div>

<style>
</style>
