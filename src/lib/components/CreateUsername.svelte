<script>
    import {createEventDispatcher} from 'svelte';
    import Input from '../components/Input.svelte';
    import Button from '../components/Button.svelte';

    const dispatch = createEventDispatcher();

    const label = {
        name: 'Username',
        value: 'Username'
    };

    const length = {
        mix: 1,
        max: 20
    };

    let username;

    function onClick() {
        dispatch('click', {username});
    }
</script>

<div class="createUsername">
    <h2>Create a username</h2>
    <p>Use lower case letters with 20 characters or less</p>
    <Input autofocus={true} isEdit="false" {label} {length} bind:value={username} onlyAllowLettersAndNumbers={true} />
    <a href="/private-policy">Private Policy</a>
    <span class="primaryButon">
        <Button primary="true" label="Get started!" on:click={onClick} />
    </span>
</div>

<style>
    .createUsername {
        @apply font-sans text-white;
        margin-right: 20%;
        margin-left: 20%;
    }
    .createUsername h2 {
        @apply text-4xl font-bold mb-2;
    }
    .createUsername p {
        @apply text-base mb-20;
    }
    .createUsername a {
        @apply block text-base mt-20 pb-28;
    }
    .primaryButon {
        @apply absolute bottom-0 right-0 pb-6 pr-6;
    }
</style>
