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
        console.log('username: ', username);
        dispatch('click', {username});
    }
</script>

<div class="font-sans text-white mb-6">
    <h2 class="text-4xl font-bold mb-2">Create a username</h2>
    <p class="text-base	mb-20">Use lower case letters with 20 characters or less</p>
    <Input autofocus={true} isEdit="false" {label} {length} bind:value={username} onlyAllowLettersAndNumbers={true} />
    <a class="block text-base mt-20 mb-11" href="/private-policy">Private Policy</a>
    <Button class="ml-64" primary="true" label="Get started!" on:click={onClick} />
</div>

<style>
</style>
