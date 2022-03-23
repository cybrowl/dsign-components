<script>
    import {createEventDispatcher} from 'svelte';
    import Modal from '../components/Modal.svelte';
    import Settings from '../components/Settings.svelte';

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
        <Settings {avatar} {username} {triggerInputEvent} on:clickAvatar={handleAvatarChange} />
    </Modal>
</div>

<style>
</style>
