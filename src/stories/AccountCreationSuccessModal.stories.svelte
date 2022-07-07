<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import AccountCreationSuccessModal from '../lib/components/AccountCreationSuccessModal.svelte';
</script>

<Meta
    title="Flow/AccountCreationSuccessModal"
    component={AccountCreationSuccessModal}
    argTypes={{
        isCreatingAccount: {control: 'boolean'}
    }}
/>

<Template let:args>
    <AccountCreationSuccessModal {...args} on:click={args.onClick} />
</Template>

<Story name="First Render" args={{}} />
