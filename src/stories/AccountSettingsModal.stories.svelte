<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import AccountSettingsModal from '../lib/components/AccountSettingsModal.svelte';
</script>

<Meta
    title="Dsign/AccountSettingsModal"
    component={AccountSettingsModal}
    argTypes={{
        avatar: {control: 'text'},
        onClick: {action: 'onClick'},
        triggerInputEvent: {control: 'boolean'},
        username: {control: 'text'}
    }}
/>

<Template let:args>
    <AccountSettingsModal {...args} on:avatarChange={args.onClick} />
</Template>

<Story
    name="Page Load"
    args={{
        username: 'cyberowl'
    }}
/>

<Story
    name="Avatar Motoko"
    args={{
        avatar: 'https://i.ibb.co/TRJmsGT/motoko.png',
        username: 'cyberowl',
        triggerInputEvent: true
    }}
/>
