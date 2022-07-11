<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import SnapCardEmpty from '../lib/components/SnapCardEmpty.svelte';
</script>

<Meta title="Dsign/SnapCardEmpty" component={SnapCardEmpty} argTypes={{}} />

<Template let:args>
    <SnapCardEmpty {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />

<style>
</style>
