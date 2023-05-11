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
		scale: 1
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
	name="project_empty"
	args={{
		name: 'project_empty',
		viewSize: {
			width: '92',
			height: '92'
		},
		size: '4rem',
		scale: 1
	}}
/>

<Story
	name="favorite_empty"
	args={{
		name: 'favorite_empty',
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
