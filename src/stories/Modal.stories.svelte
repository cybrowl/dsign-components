<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Modal from '../lib/components/Modal.svelte';
</script>

<Meta
    title="Dsign/Modal"
    component={Modal}
    argTypes={{
        isModalOpen: {control: 'boolean'},
        onClick: {action: 'onClick'},
        onClose: {action: 'onClose'}
    }}
/>

<Template let:args>
    <Modal {...args} on:click={args.onClick}>
        <div class="h-80" />
    </Modal>
</Template>

<Story
    name="Default"
    args={{
        isModalOpen: true
    }}
/>
