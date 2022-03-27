<script>
    import {createEventDispatcher} from 'svelte';
    import Input from '../components/Input.svelte';
    import Button from '../components/Button.svelte';

    const dispatch = createEventDispatcher();

    export let errorMessage = '';
    export let hasError = false;
    export let isCreatingAccount = false;

    let clearValueOnFocus = true;

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

<div class="accountCreation">
    <h2>Choose Username</h2>
    <p>Use lower case letters and numbers only</p>
    <p>Must be 20 characters or less</p>
    <Input
        {clearValueOnFocus}
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
    .accountCreation {
        @apply font-sans text-white;
        margin-right: 20%;
        margin-left: 20%;
    }
    .accountCreation h2 {
        @apply text-4xl font-bold mb-4;
    }
    .accountCreation p:nth-child(3) {
        @apply text-base mb-20;
    }
    .accountCreation a {
        @apply block text-base mt-14 pb-28;
    }
    .primaryButon {
        @apply absolute bottom-0 right-0 pb-6 pr-6;
    }
</style>
