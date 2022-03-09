<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import CreateAccountModal from '../components/CreateAccountModal.svelte';
</script>

<Meta title="Dsign/CreateAccountModal" component={CreateAccountModal} argTypes={{}} />

<Template let:args>
    <CreateAccountModal {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
