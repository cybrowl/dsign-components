<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Input from '../lib/components/Input.svelte';
</script>

<Meta
    title="Dsign/Input"
    component={Input}
    argTypes={{
        autofocus: {control: 'boolean'},
        hasError: {control: 'boolean'},
        isEdit: {control: 'boolean'},
        label: {
            name: 'text',
            value: 'text'
        },
        length: {
            name: 'number',
            value: 'number'
        },
        onlyAllowLettersAndNumbers: {control: 'boolean'}
    }}
/>

<Template let:args>
    <Input {...args} on:click={args.onClick} />
</Template>

<Story
    name="Selected"
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
        },
        onlyAllowLettersAndNumbers: true
    }}
/>

<Story
    name="Error"
    args={{
        autofocus: false,
        hasError: true,
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
