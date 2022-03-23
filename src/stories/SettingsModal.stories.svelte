<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import SettingsModal from '../lib/components/SettingsModal.svelte';
</script>

<Meta
    title="Dsign/SettingsModal"
    component={SettingsModal}
    argTypes={{
        onClick: {action: 'onClick'},
        username: {control: 'text'},
        avatar: {control: 'text'},
        triggerInputEvent: {control: 'boolean'}
    }}
/>

<Template let:args>
    <SettingsModal {...args} on:avatarChange={args.onClick} />
</Template>

<Story
    name="Default"
    args={{
        username: 'cyberowl'
    }}
/>

<Story
    name="Change Avatar"
    args={{
        username: 'cyberowl',
        triggerInputEvent: true
    }}
/>

<Story
    name="Change Avatar Image"
    args={{
        avatar: 'https://i.ibb.co/TRJmsGT/motoko.png',
        username: 'cyberowl',
        triggerInputEvent: true
    }}
/>
