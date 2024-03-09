<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import SnapUpsertPage from '../../lib/pages/SnapUpsertPage.svelte';
	import {snap_poked} from './data/snaps';

	const modal_visible = {
		account_creation: false,
		account_settings: false,
		move_snaps: false,
		snap_creation: false,
		project_options: false,
		project_rename: false
	};

	const navigationItems = [];
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
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		snap_upsert_store: {
			snap: snap_poked
		}
	}}
/>

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
		navigationItems: navigationItems,
		snap_upsert_store: {
			snap: {
				...snap_poked,
				design_file: []
			}
		}
	}}
/>

<Story
	name="No Snap"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		snap_upsert_store: {
			snap: {}
		}
	}}
/>

<Story
	name="Publishing"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		is_publishing: true,
		snap_upsert_store: {
			snap: {}
		}
	}}
/>

<Story
	name="Uploading File"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		is_uploading_design_file: true,
		snap_upsert_store: {
			snap: snap_poked
		}
	}}
/>

<Story
	name="Tags"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		is_uploading_design_file: false,
		snap_upsert_store: {
			snap: {
				...snap_poked,
				tags: ['hello, kitty']
			}
		}
	}}
/>

<Story
	name="Edit"
	args={{
		my_profile: {
			avatar:
				'https://image.lexica.art/full_jpg/7408c9b1-2648-4edb-9d51-1dc74de4750b',
			userame: 'jelly'
		},
		modal_visible: modal_visible,
		is_authenticated: true,
		navigationItems: navigationItems,
		snap_upsert_store: {
			snap: snap_poked
		}
	}}
/>
