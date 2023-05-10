<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProjectPage from '../../lib/pages/ProjectPage.svelte';
	// import projects_store from './data/projects_store';

	const modal_visible = {
		account_creation: false,
		account_settings: false,
		move_snaps: false,
		snap_creation: false,
		project_options: false,
		project_rename: false
	};

	const project = {
		canister_id: '23fub-taaaa-aaaag-abkta-cai',
		created: '1682251506243848606',
		id: '7SZYSQ7P88P9A9150GP8G332CR',
		description: 'Decentralized UI for AI Models',
		name: 'Poro',
		owner: null,
		tags: ['UI', 'AI', 'ICP', 'DESKTOP', 'MOBILE', 'WALLET'],
		snaps: [
			{
				canister_id: 'lrr5x-jaaaa-aaaag-aatzq-cai',
				created: '1682251811746367146',
				isSelected: false,
				file_asset: {
					canister_id: '',
					file_name: '',
					id: '',
					is_public: false,
					url: ''
				},
				id: '7SZZ2TJWHZ3XYRZTWMK5A08MYN',
				image_cover_location: 0,
				images: [
					{
						canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
						id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
						url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
					}
				],
				metrics: {
					views: '0',
					likes: '0'
				},
				owner: null,
				project: [],
				tags: [],
				title: 'Chat History',
				username: 'cyberowl'
			},
			{
				canister_id: 'lrr5x-jaaaa-aaaag-aatzq-cai',
				created: '1682251811746367146',
				isSelected: false,
				file_asset: {
					canister_id: '',
					file_name: '',
					id: '',
					is_public: false,
					url: ''
				},
				id: '7SZZ2TJWHZ3XYRZTWMK5A08MYN',
				image_cover_location: 0,
				images: [
					{
						canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
						id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
						url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
					}
				],
				metrics: {
					views: '0',
					likes: '0'
				},
				owner: null,
				project: [],
				tags: [],
				title: 'Wallet',
				username: 'cyberowl'
			}
		],
		username: 'cyberowl'
	};
</script>

<Meta
	title="Pages/Project"
	component={ProjectPage}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<ProjectPage {...args} />
</Template>

<Story
	name="Snaps / Auth / Guest"
	args={{
		avatar_nav: 'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		project: project,
		selectedTabState: {
			isChangesSelected: false,
			isRecsSelected: false,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps / Auth / Owner"
	args={{
		avatar_nav: 'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		is_owner: true,
		project: project,
		selectedTabState: {
			isChangesSelected: false,
			isRecsSelected: false,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps / Auth / Owner / Edit"
	args={{
		avatar_nav: 'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		is_owner: true,
		isEditActive: true,
		project: project,
		selectedTabState: {
			isChangesSelected: false,
			isRecsSelected: false,
			isSnapsSelected: true
		}
	}}
/>

<Story
	name="Snaps / Guest / Guest"
	args={{
		avatar_nav: 'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: false,
		project: project,
		selectedTabState: {
			isChangesSelected: false,
			isRecsSelected: false,
			isSnapsSelected: true
		}
	}}
/>
