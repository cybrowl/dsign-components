<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import SnapCreationModal from '../lib/components/SnapCreationModal.svelte';
</script>

<Meta
    title="Modals/SnapCreation"
    component={SnapCreationModal}
    argTypes={{
        isCreatingSnap: {control: 'boolean'}
    }}
/>

<Template let:args>
    <SnapCreationModal {...args} on:click={args.onClick} />
</Template>

<Story name="First Render" args={{}} />
