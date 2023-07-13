<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import SnapPage from '../../lib/pages/SnapPage.svelte';
	import projects_store from './data/projects_store';

	const modal_visible = {
		account_creation: false,
		account_settings: false,
		move_snaps: false,
		snap_creation: false,
		project_options: false,
		project_rename: false
	};

	const navItems = [
		{name: 'Explore', isSelected: false},
		{name: 'Projects', isSelected: false},
		{name: 'Favorites', isSelected: false},
		{name: 'Profile', isSelected: true}
	];
</script>

<Meta
	title="Pages/Snap View"
	component={SnapPage}
	argTypes={{
		backHistory: {action: 'onClick'},
		edit: {action: 'onClick'}
	}}
/>

<Template let:args>
	<SnapPage {...args} on:backHistory={args.backHistory} on:edit={args.edit} />
</Template>

<Story
	name="No File"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navItems: navItems,
		snap: {
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
				},
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
			project: {
				id: '8SZZ2TJWHZ3XYRZTWMK5A08MYN',
				canister_id: 'xrr5x-jaaaa-aaaag-aatzq-cai',
				name: 'Poro'
			},
			tags: ['Wallet', 'Desktop', 'BTC'],
			title: 'Wallet',
			username: 'cyberowl'
		}
	}}
/>

<Story
	name="Owner"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		is_owner: true,
		navItems: navItems,
		snap: {
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
				},
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
			project: {
				id: '8SZZ2TJWHZ3XYRZTWMK5A08MYN',
				canister_id: 'xrr5x-jaaaa-aaaag-aatzq-cai',
				name: 'Poro'
			},
			tags: ['Wallet', 'Desktop', 'BTC'],
			title: 'Wallet',
			username: 'cyberowl'
		}
	}}
/>

<Story
	name="File"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navItems: navItems,
		snap: {
			canister_id: 'lrr5x-jaaaa-aaaag-aatzq-cai',
			created: '1682251811746367146',
			isSelected: false,
			file_asset: {
				canister_id: '',
				file_name: 'story.fig',
				id: 'xxx',
				is_public: false,
				url: 'https://l7tq7-sqaaa-aaaag-aatyq-cai.raw.icp0.io/asset/7VFRDHRM9CKRS6X4YQPQ6J72MM'
			},
			id: '7SZZ2TJWHZ3XYRZTWMK5A08MYN',
			image_cover_location: 0,
			images: [
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
				},
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
			project: {
				id: '8SZZ2TJWHZ3XYRZTWMK5A08MYN',
				canister_id: 'xrr5x-jaaaa-aaaag-aatzq-cai',
				name: 'Poro'
			},
			tags: ['Wallet', 'Desktop', 'BTC'],
			title: 'Wallet',
			username: 'cyberowl'
		}
	}}
/>

<Story
	name="No Tags"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navItems: navItems,
		snap: {
			canister_id: 'lrr5x-jaaaa-aaaag-aatzq-cai',
			created: '1682251811746367146',
			isSelected: false,
			file_asset: {
				canister_id: '',
				file_name: 'story.fig',
				id: 'xxx',
				is_public: false,
				url: 'https://l7tq7-sqaaa-aaaag-aatyq-cai.raw.icp0.io/asset/7VFRDHRM9CKRS6X4YQPQ6J72MM'
			},
			id: '7SZZ2TJWHZ3XYRZTWMK5A08MYN',
			image_cover_location: 0,
			images: [
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
				},
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
			project: {
				id: '8SZZ2TJWHZ3XYRZTWMK5A08MYN',
				canister_id: 'xrr5x-jaaaa-aaaag-aatzq-cai',
				name: 'Poro'
			},
			tags: [],
			title: 'Wallet',
			username: 'cyberowl'
		}
	}}
/>

<Story
	name="No Project Ref"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navItems: navItems,
		snap: {
			canister_id: 'lrr5x-jaaaa-aaaag-aatzq-cai',
			created: '1682251811746367146',
			isSelected: false,
			file_asset: {
				canister_id: '',
				file_name: 'story.fig',
				id: 'xxx',
				is_public: false,
				url: 'https://l7tq7-sqaaa-aaaag-aatyq-cai.raw.icp0.io/asset/7VFRDHRM9CKRS6X4YQPQ6J72MM'
			},
			id: '7SZZ2TJWHZ3XYRZTWMK5A08MYN',
			image_cover_location: 0,
			images: [
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
				},
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
				},
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7VAFVFDNB7JCYKA8NSJA11AAB0'
				}
			],
			metrics: {
				views: '0',
				likes: '0'
			},
			owner: [],
			project: [],
			tags: [],
			title: 'Wallet',
			username: 'cyberowl'
		}
	}}
/>

<Story
	name="Not Authenticated"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: false,
		navItems: navItems,
		snap: {
			canister_id: 'lrr5x-jaaaa-aaaag-aatzq-cai',
			created: '1682251811746367146',
			isSelected: false,
			file_asset: {
				canister_id: '',
				file_name: 'story.fig',
				id: 'xxx',
				is_public: false,
				url: 'https://l7tq7-sqaaa-aaaag-aatyq-cai.raw.icp0.io/asset/7VFRDHRM9CKRS6X4YQPQ6J72MM'
			},
			id: '7SZZ2TJWHZ3XYRZTWMK5A08MYN',
			image_cover_location: 0,
			images: [
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
				},
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
				},
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7VAFVFDNB7JCYKA8NSJA11AAB0'
				}
			],
			metrics: {
				views: '0',
				likes: '0'
			},
			owner: [],
			project: [],
			tags: [],
			title: 'Wallet',
			username: 'cyberowl'
		}
	}}
/>

<Story
	name="Feedback Modal"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: {...modal_visible, snap_feedback: true},
		is_authenticated: true,
		navItems: navItems,
		snap: {
			canister_id: 'lrr5x-jaaaa-aaaag-aatzq-cai',
			created: '1682251811746367146',
			isSelected: false,
			file_asset: {
				canister_id: '',
				file_name: 'story.fig',
				id: 'xxx',
				is_public: false,
				url: 'https://l7tq7-sqaaa-aaaag-aatyq-cai.raw.icp0.io/asset/7VFRDHRM9CKRS6X4YQPQ6J72MM'
			},
			id: '7SZZ2TJWHZ3XYRZTWMK5A08MYN',
			image_cover_location: 0,
			images: [
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
				},
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7SZZ2TJWHZ0RWYVPXFAA6GA63M'
				},
				{
					canister_id: 'lwq3d-eyaaa-aaaag-aatza-cai',
					id: '7SZZ2TJWHZ0RWYVPXFAA6GA63M',
					url: 'https://lwq3d-eyaaa-aaaag-aatza-cai.raw.icp0.io/image/snap/7VAFVFDNB7JCYKA8NSJA11AAB0'
				}
			],
			metrics: {
				views: '0',
				likes: '0'
			},
			owner: [],
			project: [],
			tags: [],
			title: 'Wallet',
			username: 'cyberowl'
		}
	}}
/>
