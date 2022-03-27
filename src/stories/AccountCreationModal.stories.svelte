<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import AccountCreationModal from '../lib/components/AccountCreationModal.svelte';
</script>

<Meta
    title="Flow/AccountCreationModal"
    component={AccountCreationModal}
    argTypes={{
        isCreatingAccount: {control: 'boolean'}
    }}
/>

<Template let:args>
    <AccountCreationModal {...args} on:click={args.onClick} />
</Template>

<Story name="Page Load" args={{}} />

<Story
    name="Creating Account"
    args={{
        errorMessage: '',
        isCreatingAccount: true
    }}
/>

<Story
    name="Account Creation Failed/UsernameInvalid"
    args={{
        errorMessage: 'Use lower case letters with 20 characters or less',
        hasError: true,
        isCreatingAccount: false
    }}
/>

<Story
    name="Account Creation Failed/UserTaken"
    args={{
        errorMessage: 'Username already taken',
        hasError: true,
        isCreatingAccount: false
    }}
/>

<Story
    name="Account Creation/ProfileCreated"
    args={{
        hasError: false,
        isCreatingAccount: false,
        createdAccount: true,
        closeModalAfterNumSecs: true
    }}
/>
