<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import AccountCreation from '../lib/components/AccountCreation.svelte';
</script>

<Meta
    title="Components/AccountCreation"
    component={AccountCreation}
    argTypes={{
        avatar: {control: 'text'}
    }}
/>

<Template let:args>
    <AccountCreation {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
