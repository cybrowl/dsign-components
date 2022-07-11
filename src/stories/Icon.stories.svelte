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
    name="checkmark"
    args={{
        name: 'checkmark',
        class: 'checkmark',
        width: '20',
        height: '20'
    }}
/>

<Story
    name="unchecked"
    args={{
        name: 'unchecked',
        class: 'unchecked',
        width: '20',
        height: '20'
    }}
/>

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
    name="close_upload"
    args={{
        name: 'close_upload',
        class: 'close_upload',
        width: '24',
        height: '24'
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
    name="like"
    args={{
        name: 'like',
        width: '25',
        height: '25'
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
