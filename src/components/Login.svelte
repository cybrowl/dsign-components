<script>
    import Button from './Button.svelte';

    function onClick(event) {
        dispatch('click', event);
    }
</script>

<span>
    <Button label="Sign In" on:click={onClick} class="mr-4" />
    <Button primary label="Let’s get started!" />
</span>

<style>
</style>
