<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import AccountSettings from '../lib/components/AccountSettings.svelte';
</script>

<Meta
    title="Dsign/AccountSettings"
    component={AccountSettings}
    argTypes={{
        onClick: {action: 'onClick'},
        names: {control: 'object'}
    }}
/>

<Template let:args>
    <AccountSettings {...args} on:clickAvatar={args.onClick} on:clickLogOut={args.onClick} />
</Template>

<Story
    name="Default"
    args={{
        username: 'cyberowl'
    }}
/>
