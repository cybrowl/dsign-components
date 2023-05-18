<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import SnapUpsertPage from '../../lib/pages/SnapUpsertPage.svelte';

	const modal_visible = {
		account_creation: false,
		account_settings: false,
		move_snaps: false,
		snap_creation: false,
		project_options: false,
		project_rename: false
	};

	const navigationItems = [];

	const snap_creation = {
		canister_id: 'cbopz-duaaa-aaaaa-qaaka-cai',
		created: 1684070034352968000,
		file_asset: {
			canister_id: 'ctiya-peaaa-aaaaa-qaaja-cai',
			file_name: 'design_v2.fig',
			id: '7VMWE2SAT8Q3QKX2KRYSRA54TF',
			is_public: true,
			url: ''
		},
		id: '7VMWE2SAT8XF3H2M3BJV2M3A20',
		image_cover_location: 0,
		images: [
			{
				canister_id: 'lwq3d-eyaaa-xx-aatza-cai',
				cover: true,
				id: '7VAFW5ND9A092SQ4WSFCPHW8XAP',
				url: 'https://images.squarespace-cdn.com/content/v1/54437e21e4b048c830a0cff1/1556953502568-HS04KIMBEB5N6UGT2EFB/animal-crossing1.jpg?format=2500w'
			},
			{
				canister_id: 'lwq3d-yy-aaaag-aatza-cai',
				id: '7VAFW5ND9A092SQ4WYSFCPHW8AP',
				url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7VAFW5ND9A092SQ4WSFCPHW8AP'
			},
			{
				canister_id: 'lwq3d-xx-aaaag-aatza-cai',
				id: '7SZZ2TJWHZ0RXWYVPXFAA6GA63M',
				url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
			},
			{
				canister_id: 'lwq3d-eyaaa-yy-aatza-cai',
				id: '7SZZ2TJWXHZ0RWYVPXFAA6GA63M',
				url: 'https://images.squarespace-cdn.com/content/v1/54437e21e4b048c830a0cff1/1556955289134-YAPTDWVWWEPYD7BQTKUT/video-game-panic2.jpg?format=2500w'
			}
		],
		length: 1,
		metrics: {
			views: 0,
			likes: 0
		},
		owner: null,
		project: {
			id: '7VJ0DJRY623A0EHFMXAQS64BG6',
			canister_id: 'cgpjn-omaaa-aaaaa-qaakq-cai',
			name: 'Axon'
		},
		tags: [],
		title: 'Dsign File',
		username: 'cyberowl'
	};
</script>

<Meta
	title="Pages/Snap Upsert"
	component={SnapUpsertPage}
	argTypes={{
		modal_visible: {
			account_creation: 'boolean',
			account_settings: 'boolean',
			project_edit: 'boolean',
			project_edit: 'boolean'
		},
		attachFile: {action: 'onClick'},
		removeFile: {action: 'onClick'}
	}}
/>

<Template let:args>
	<SnapUpsertPage
		{...args}
		on:attachFile={args.attachFile}
		on:removeFile={args.removeFile}
	/>
</Template>

<Story
	name="With File"
	args={{
		avatar:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		snap_creation
	}}
/>

<Story
	name="No File"
	args={{
		avatar:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		snap_creation: {
			...snap_creation,
			file_asset: {}
		}
	}}
/>

<Story
	name="No Snap"
	args={{
		avatar:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		snap_creation: {}
	}}
/>

<Story
	name="Publishing"
	args={{
		avatar:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		is_publishing: true,
		snap_creation: {}
	}}
/>

<Story
	name="Uploading File"
	args={{
		avatar:
			'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
		username: 'jelly',
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		is_uploading_design_file: true,
		snap_creation: snap_creation
	}}
/>
