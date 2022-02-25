<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Button from '../components/Button.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
    title="Dsign/Button"
    component={Button}
    argTypes={{
        onClick: {action: 'onClick'},
        label: {control: 'text'},
        primary: {control: 'boolean'},
        primaryDisabled: {control: 'boolean'},
        secondaryDisabled: {control: 'boolean'},
        size: {
            control: {type: 'select'},
            options: ['medium']
        }
    }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Button {...args} on:click={args.onClick} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
    name="Primary"
    args={{
        primary: true,
        label: 'Button'
    }}
/>

<Story
    name="Primary/Disabled"
    args={{
        primary: true,
        primaryDisabled: true,
        label: 'Button'
    }}
/>

<Story
    name="Secondary"
    args={{
        label: 'Button'
    }}
/>

<Story
    name="Secondary/Disabled"
    args={{
        label: 'Button',
        primaryDisabled: true
    }}
/>
