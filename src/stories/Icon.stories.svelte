<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Icon from '../components/Icon.svelte';
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
