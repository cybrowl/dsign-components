<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Icon from '../lib/components/Icon.svelte';
</script>

<Meta
    title="Dsign/Icon"
    component={Icon}
    argTypes={{
        name: {control: 'text'},
        width: {control: 'text'},
        height: {control: 'text'}
    }}
/>

<Template let:args>
    <Icon {...args} on:click={args.onClick} />
</Template>

<Story
    name="close_standard"
    args={{
        name: 'close_standard',
        class: 'closeStandard',
        width: '20',
        height: '20'
    }}
/>

<Story
    name="error_sign"
    args={{
        name: 'error_sign',
        width: '20',
        height: '20'
    }}
/>

<Story
    name="edit_avatar"
    args={{
        name: 'edit_avatar',
        width: '20',
        height: '20'
    }}
/>

<Story
    name="favorite"
    args={{
        name: 'favorite',
        width: '39',
        height: '39'
    }}
/>

<Story
    name="favorite_disabled"
    args={{
        name: 'favorite_disabled',
        width: '39',
        height: '39'
    }}
/>

<Story
    name="visibility"
    args={{
        name: 'visibility',
        width: '20',
        height: '20'
    }}
/>

<Story
    name="visibility_disabled"
    args={{
        name: 'visibility_disabled',
        width: '20',
        height: '20'
    }}
/>
