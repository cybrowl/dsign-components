<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Input from '../components/Input.svelte';
</script>

<Meta
    title="Dsign/Input"
    component={Input}
    argTypes={{
        isEdit: {control: 'boolean'},
        label: {
            name: 'text',
            value: 'text'
        }
    }}
/>

<Template let:args>
    <Input {...args} on:click={args.onClick} />
</Template>

<Story
    name="Default"
    args={{
        isEdit: false,
        label: {
            name: 'Username',
            value: 'Username'
        }
    }}
/>
