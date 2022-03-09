<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Input from '../components/Input.svelte';
</script>

<Meta
    title="Dsign/Input"
    component={Input}
    argTypes={{
        autofocus: {control: 'boolean'},
        isEdit: {control: 'boolean'},
        label: {
            name: 'text',
            value: 'text'
        },
        length: {
            name: 'number',
            value: 'number'
        }
    }}
/>

<Template let:args>
    <Input {...args} on:click={args.onClick} />
</Template>

<Story
    name="Username"
    args={{
        autofocus: true,
        isEdit: false,
        label: {
            name: 'Username',
            value: 'Username'
        },
        length: {
            mix: 1,
            max: 20
        }
    }}
/>
