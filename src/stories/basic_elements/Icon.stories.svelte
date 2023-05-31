<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import Icon from '../../lib/components/basic_elements/Icon.svelte';
</script>

<Meta
	title="Basic Elements/Icon"
	component={Icon}
	argTypes={{
		height: {control: 'text'},
		name: {control: 'text'},
		width: {control: 'text'},
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<div class="m-6">
		<Icon {...args} on:click={args.onClick} />
	</div>
</Template>

<Story
	name="checkmark"
	args={{
		name: 'checkmark',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="unchecked"
	args={{
		name: 'unchecked',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="close_standard"
	args={{
		name: 'close_standard',
		class: 'cursor_pointer fill_white hover_bubble_purple',
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="close_edit"
	args={{
		name: 'close_edit',
		class: 'cursor_pointer fill_dark_grey hover_primary_purple',
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="error_sign"
	args={{
		name: 'error_sign',
		clickable: false,
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="edit"
	args={{
		class: 'cursor_pointer fill_dark_grey hover_primary_purple',
		name: 'edit',
		size: '4rem',
		scale: 1,
		viewSize: {
			width: '40',
			height: '40'
		}
	}}
/>

<Story
	name="edit_avatar"
	args={{
		name: 'edit_avatar',
		class: 'cursor_pointer',
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="favorite"
	args={{
		name: 'favorite',
		class: 'cursor_pointer fill_none',
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="favorite_active"
	args={{
		name: 'favorite',
		class: 'cursor_pointer fill_primary_purple',
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="options"
	args={{
		class: 'cursor_pointer fill_dark_grey hover_grey',
		name: 'options',
		viewSize: {
			width: '40',
			height: '40'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="trash"
	args={{
		class: 'cursor_pointer fill_dark_grey hover_primary_purple',
		name: 'trash',
		viewSize: {
			width: '40',
			height: '40'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="project_creation"
	args={{
		class: 'fill_castle_grey',
		name: 'project_creation',
		viewSize: {
			width: '80',
			height: '80'
		},
		size: '6rem',
		scale: 1
	}}
/>

<Story
	name="snap_creation"
	args={{
		name: 'snap_creation',
		class: 'cursor_pointer fill_castle_grey',
		viewSize: {
			width: '89',
			height: '89'
		},
		size: '6rem',
		scale: 1
	}}
/>

<Story
	name="snap_creation_v2"
	args={{
		name: 'snap_creation_v2',
		class: 'cursor_pointer fill_castle_grey',
		viewSize: {
			width: '89',
			height: '89'
		},
		size: '6rem',
		scale: 1
	}}
/>

<Story
	name="project_empty"
	args={{
		name: 'project_empty',
		clickable: false,
		viewSize: {
			width: '92',
			height: '92'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="snap_empty"
	args={{
		name: 'snap_empty',
		clickable: false,
		viewSize: {
			width: '64',
			height: '64'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="settings"
	args={{
		name: 'settings',
		class: 'cursor_pointer fill_dark_grey hover_smoky_grey',
		viewSize: {
			width: '44',
			height: '44'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="back"
	args={{
		name: 'back',
		class: 'cursor_pointer fill_dark_grey hover_tulip_purple',
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="figma"
	args={{
		name: 'figma',
		class: 'cursor_pointer fill_dark_grey hover_tulip_purple',
		viewSize: {
			width: '48',
			height: '48'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="add_name"
	args={{
		name: 'add_name',
		clickable: false,
		class: 'cursor_default fill_dark_grey',
		viewSize: {
			width: '32',
			height: '32'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="upload_category"
	args={{
		name: 'upload_category',
		clickable: false,
		class: 'cursor_default fill_dark_grey',
		viewSize: {
			width: '24',
			height: '24'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="attach_design_file"
	args={{
		name: 'attach_design_file',
		class: 'cursor_default fill_dark_grey',
		viewSize: {
			width: '55',
			height: '55'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="design_file_attached"
	args={{
		name: 'design_file_attached',
		class: 'cursor_default fill_dark_grey',
		viewSize: {
			width: '55',
			height: '55'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="attach_images"
	args={{
		name: 'attach_images',
		class: 'cursor_default fill_dark_grey',
		viewSize: {
			width: '40',
			height: '40'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="move_images"
	args={{
		name: 'move_images',
		class: 'cursor_default fill_dark_grey',
		viewSize: {
			width: '42',
			height: '42'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="add_tags"
	args={{
		name: 'add_tags',
		clickable: false,
		class: 'cursor_default fill_dark_grey',
		viewSize: {
			width: '31.5',
			height: '24'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="organize_category"
	args={{
		name: 'organize_category',
		clickable: false,
		class: 'cursor_default fill_white',
		size: '4rem'
	}}
/>

<!-- <Story
	name="file_"
	args={{
		name: 'file',
		viewSize: {
			width: '40',
			height: '45'
		},
		size: '4rem',
		scale: 1
	}}
/> -->
