<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import ProjectsPage from '../../lib/pages/projects.svelte';
</script>

<Meta
    title="Pages/Snaps"
    component={ProjectsPage}
    argTypes={{
        onClick: {action: 'onClick'},
        navItems: {control: 'array'},
        snap_storage: {control: 'array'}
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
        ],
        snap_storage: [
            {
                cover_image_location: 0,
                isSelected: false,
                image_urls: [
                    'https://cdn.dribbble.com/userupload/3130813/file/original-df1b12de753e804c792c66e24fcb90ac.jpg?compress=1&resize=1024x768',
                    'https://picsum.photos/200/300?image=2',
                    'https://picsum.photos/200/300?image=3'
                ],
                likes: 0,
                title: 'plant',
                views: 0
            },
            {
                cover_image_location: 0,
                isSelected: false,
                image_urls: [
                    'https://cdn.dribbble.com/userupload/3131410/file/original-43f87a088d4e48705ef9397779a4f555.jpg?compress=1&resize=1024x768',
                    'https://picsum.photos/200/300?image=2',
                    'https://picsum.photos/200/300?image=3'
                ],
                likes: 0,
                title: 'plant',
                views: 0
            },
            {
                cover_image_location: 0,
                isSelected: false,
                image_urls: [
                    'https://cdn.dribbble.com/userupload/3128908/file/original-c2b5e63c877bbfecaeedd39b886bacdb.png?compress=1&resize=1024x768&vertical=center',
                    'https://picsum.photos/200/300?image=2',
                    'https://picsum.photos/200/300?image=3'
                ],
                likes: 0,
                title: 'plant',
                views: 0
            },
            {
                cover_image_location: 0,
                isSelected: false,
                image_urls: [
                    'https://cdn.dribbble.com/userupload/3124376/file/original-8940fb6294b9ef793adafb8aca897901.png?compress=1&resize=1024x768&vertical=center',
                    'https://picsum.photos/200/300?image=2',
                    'https://picsum.photos/200/300?image=3'
                ],
                likes: 0,
                title: 'plant',
                views: 0
            }
        ]
    }}
/>
