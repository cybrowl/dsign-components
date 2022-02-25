<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Navigation from '../components/Navigation.svelte';
</script>

<Meta
    title="Dsign/Navigation"
    component={Navigation}
    argTypes={{
        onClick: {action: 'onClick'},
        names: {control: 'object'}
    }}
/>

<Template let:args>
    <Navigation {...args} on:click={args.onClick} />
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
