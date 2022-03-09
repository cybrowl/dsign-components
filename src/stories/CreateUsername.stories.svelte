<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import CreateUsername from '../components/CreateUsername.svelte';
</script>

<Meta
    title="Dsign/CreateUsername"
    component={CreateUsername}
    argTypes={{
        avatar: {control: 'text'}
    }}
/>

<Template let:args>
    <CreateUsername {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
