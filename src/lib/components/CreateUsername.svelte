<script>
    import {createEventDispatcher} from 'svelte';
    import Input from '../components/Input.svelte';
    import Button from '../components/Button.svelte';

    const dispatch = createEventDispatcher();

    export let errorMessage = '';
    export let hasError = false;
    export let isCreatingAccount;

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
    <p>Use lower case letters and numbers only</p>
    <p>Must be 20 characters or less</p>
    <Input
        {errorMessage}
        {hasError}
        {label}
        {length}
        autofocus={true}
        bind:value={username}
        isEdit="false"
        onlyAllowLettersAndNumbers={true}
    />
    <a href="/private-policy">Private Policy</a>
    <span class="primaryButon">
        <Button primary="true" label="Get started!" on:click={onClick} primaryDisabled={isCreatingAccount} />
    </span>
</div>

<style>
    .createUsername {
        @apply font-sans text-white;
        margin-right: 20%;
        margin-left: 20%;
    }
    .createUsername h2 {
        @apply text-4xl font-bold mb-4;
    }
    .createUsername p:nth-child(3) {
        @apply text-base mb-16;
    }
    .createUsername a {
        @apply block text-base mt-20 pb-28;
    }
    .primaryButon {
        @apply absolute bottom-0 right-0 pb-6 pr-6;
    }
</style>
