<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import SnapCreation from '../lib/components/SnapCreation.svelte';
</script>

<Meta
    title="Flow/Parts/SnapCreation"
    component={SnapCreation}
    argTypes={{
        avatar: {control: 'text'}
    }}
/>

<Template let:args>
    <SnapCreation {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
