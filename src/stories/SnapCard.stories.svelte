<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import SnapCard from '../lib/components/SnapCard.svelte';
</script>

<Meta title="Dsign/SnapCard" component={SnapCard} argTypes={{}} />

<Template let:args>
    <SnapCard {...args} on:click={args.onClick} />
</Template>

<Story
    name="Default"
    args={{
        snap: {
            isSelected: false,
            cover_image_location: '0',
            likes: 456,
            views: 867,
            image_urls: ['https://i.imgur.com/50CnzSg.png']
        }
    }}
/>

<Story
    name="Loading"
    args={{
        isLoadingSnap: true
    }}
/>

<Story
    name="Unselected"
    args={{
        isEditMode: true,
        snap: {
            isSelected: false,
            cover_image_location: '0',
            likes: 456,
            views: 867,
            image_urls: ['https://i.imgur.com/50CnzSg.png']
        }
    }}
/>

<Story
    name="Is Selected"
    args={{
        isEditMode: true,
        snap: {
            isSelected: true,
            cover_image_location: '0',
            likes: 456,
            views: 867,
            image_urls: ['https://i.imgur.com/50CnzSg.png']
        }
    }}
/>

<style>
</style>
