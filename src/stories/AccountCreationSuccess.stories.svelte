<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import AccountCreationSuccess from '../lib/components/AccountCreationSuccess.svelte';
</script>

<Meta
    title="Components/AccountCreationSuccess"
    component={AccountCreationSuccess}
    argTypes={{
        avatar: {control: 'text'}
    }}
/>

<Template let:args>
    <AccountCreationSuccess {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
