<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Settings from '../lib/components/Settings.svelte';
</script>

<Meta
    title="Dsign/Settings"
    component={Settings}
    argTypes={{
        onClick: {action: 'onClick'},
        names: {control: 'object'}
    }}
/>

<Template let:args>
    <Settings {...args} on:click={args.onClick} />
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
