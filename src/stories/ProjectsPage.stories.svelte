<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import ProjectsPage from '../lib/pages/projects.svelte';
</script>

<Meta
    title="Pages/Snaps"
    component={ProjectsPage}
    argTypes={{
        onClick: {action: 'onClick'},
        names: {control: 'object'}
    }}
/>

<Template let:args>
    <ProjectsPage {...args} on:click={args.onClick} />
</Template>

<Story
    name="Default"
    args={{
        navItems: [
            {name: 'Explore', selected: false},
            {name: 'Favorites', selected: false},
            {name: 'Projects', selected: false}
        ]
    }}
/>
