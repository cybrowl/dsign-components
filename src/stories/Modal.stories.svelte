<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Modal from '../components/Modal.svelte';
</script>

<Meta
    title="Dsign/Modal"
    component={Modal}
    argTypes={{
        onClick: {action: 'onClick'},
        onClose: {action: 'onClose'}
    }}
/>

<Template let:args>
    <Modal {...args} on:click={args.onClick} />
</Template>

<Story
    name="Default"
    args={{
        primary: true,
        label: 'Modal'
    }}
/>
