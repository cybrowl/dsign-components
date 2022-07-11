<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import ProjectEditActionsBar from '../lib/components/ProjectEditActionsBar.svelte';
</script>

<Meta
    title="Dsign/ProjectEditActionsBar"
    component={ProjectEditActionsBar}
    argTypes={{
        onClick: {action: 'onClick'}
    }}
/>

<Template let:args>
    <ProjectEditActionsBar {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
