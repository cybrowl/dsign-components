<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import CreateAccountModal from '../lib/components/CreateAccountModal.svelte';
</script>

<Meta
    title="Dsign/CreateUsernameModal"
    component={CreateAccountModal}
    argTypes={{
        isCreatingAccount: {control: 'boolean'}
    }}
/>

<Template let:args>
    <CreateAccountModal {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />

<Story
    name="Creating Account"
    args={{
        errorMessage: '',
        isCreatingAccount: true
    }}
/>

<Story
    name="Account Creation Failed"
    args={{
        errorMessage: 'Use lower case letters with 20 characters or less',
        hasError: true,
        isCreatingAccount: false
    }}
/>
