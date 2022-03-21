<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Avatar from '../lib/components/Avatar.svelte';
</script>

<Meta
    title="Dsign/Avatar"
    component={Avatar}
    argTypes={{
        avatar: {control: 'text'}
    }}
/>

<Template let:args>
    <Avatar {...args} on:click={args.onClick} />
</Template>

<Story
    name="Default/Mishicat"
    args={{
        avatar: 'https://i.ibb.co/KVfVsg0/Coffee.png',
        hasAvatar: true
    }}
/>

<Story
    name="Default/Motoko"
    args={{
        avatar: 'https://i.ibb.co/TRJmsGT/motoko.png',
        hasAvatar: true
    }}
/>

<Story
    name="Default/Initials"
    args={{
        hasAvatar: false,
        firstCharUsername: 'M',
        lastCharUsername: 'T'
    }}
/>
