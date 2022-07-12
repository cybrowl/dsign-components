<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import ProjectsTabs from '../lib/components/ProjectsTabs.svelte';
</script>

<Meta
    title="Dsign/ProjectsTabs"
    component={ProjectsTabs}
    argTypes={{
        onClick: {action: 'onClick'}
    }}
/>

<Template let:args>
    <ProjectsTabs {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
