<script>
    import {createEventDispatcher} from 'svelte';
    import SnapCreation from '../components/SnapCreation.svelte';
    import Modal from '../components/Modal.svelte';

    const dispatch = createEventDispatcher();

    export let title = '';
    export let triggerInputEvent = false;

    function handleAvatarChange(e) {
        dispatch('avatarChange');
    }
</script>

<div>
    <Modal>
        <SnapCreation {title} {triggerInputEvent} on:clickAvatar={handleAvatarChange} />
    </Modal>
</div>

<style>
</style>
