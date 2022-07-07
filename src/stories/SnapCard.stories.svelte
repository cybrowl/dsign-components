<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import SnapCard from '../lib/components/SnapCard.svelte';
</script>

<Meta title="Dsign/SnapCard" component={SnapCard} argTypes={{}} />

<Template let:args>
    <SnapCard {...args} on:click={args.onClick} />
</Template>

<Story
    name="Default"
    args={{
        snap: {
            likes: 456,
            views: 867,
            url: 'https://bafybeifdvmxoh4wo6xasiwvcjg62hwewk6afwvvljtttallaslvu6v4qvi.ipfs.dweb.link/profile.png'
        }
    }}
/>

<style>
</style>
