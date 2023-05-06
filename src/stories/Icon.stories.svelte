<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import Icon from '../lib/components/Icon.svelte';
</script>

<Meta
	title="Basic Elements/Icon"
	component={Icon}
	argTypes={{
		name: {control: 'text'},
		width: {control: 'text'},
		height: {control: 'text'}
	}}
/>

<Template let:args>
	<Icon {...args} on:click={args.onClick} />
</Template>

<Story
	name="checkmark"
	args={{
		name: 'checkmark',
		class: 'checkmark',
		width: '20',
		height: '20'
	}}
/>

<Story
	name="unchecked"
	args={{
		name: 'unchecked',
		class: 'unchecked',
		width: '20',
		height: '20'
	}}
/>

<Story
	name="close_standard"
	args={{
		name: 'close_standard',
		class: 'closeStandard',
		width: '20',
		height: '20'
	}}
/>

<Story
	name="close_rounded"
	args={{
		name: 'close_rounded',
		class: 'closeRounded',
		width: '48',
		height: '48'
	}}
/>

<Story
	name="close_edit"
	args={{
		class: 'editActionsBar',
		name: 'close_edit',
		width: '40',
		height: '40'
	}}
/>

<Story
	name="close_upload"
	args={{
		name: 'close_upload',
		class: 'close_upload',
		width: '24',
		height: '24'
	}}
/>

<Story
	name="error_sign"
	args={{
		name: 'error_sign',
		width: '20',
		height: '20'
	}}
/>

<Story
	name="edit"
	args={{
		class: 'editActionsBar',
		name: 'edit',
		width: '40',
		height: '40'
	}}
/>
<Story
	name="down_arrow"
	args={{
		name: 'down_arrow',
		width: '24',
		height: '24'
	}}
/>

<Story
	name="edit_avatar"
	args={{
		name: 'edit_avatar',
		width: '20',
		height: '20'
	}}
/>

<Story
	name="favorite"
	args={{
		name: 'favorite',
		width: '39',
		height: '39'
	}}
/>

<Story
	name="favorite_disabled"
	args={{
		name: 'favorite_disabled',
		width: '39',
		height: '39'
	}}
/>

<Story
	name="file_trash"
	args={{
		name: 'file_trash',
		width: '40',
		height: '40'
	}}
/>

<Story
	name="file_"
	args={{
		name: 'file',
		width: '40',
		height: '45'
	}}
/>

<Story
	name="like"
	args={{
		class: 'like',
		name: 'like',
		width: '25',
		height: '25'
	}}
/>

<Story
	name="logo"
	args={{
		name: 'logo',
		width: '240',
		height: '240'
	}}
/>

<Story
	name="move"
	args={{
		class: 'editActionsBar',
		name: 'move',
		width: '40',
		height: '40'
	}}
/>

<Story
	name="options"
	args={{
		class: 'options',
		name: 'options',
		width: '40',
		height: '40'
	}}
/>

<Story
	name="project_creation"
	args={{
		class: 'projectCreation',
		name: 'project_creation',
		width: '80',
		height: '80'
	}}
/>

<Story
	name="project_empty"
	args={{
		name: 'project_empty',
		width: '92',
		height: '92'
	}}
/>

<Story
	name="snap_favorite_empty"
	args={{
		name: 'snap_favorite_empty',
		width: '64',
		height: '64'
	}}
/>

<Story
	name="trash"
	args={{
		class: 'editActionsBar',
		name: 'trash',
		width: '40',
		height: '40'
	}}
/>

<Story
	name="upload_snap"
	args={{
		name: 'upload_snap',
		width: '89',
		height: '89'
	}}
/>

<Story
	name="upload_file"
	args={{
		name: 'upload_file',
		width: '40',
		height: '40'
	}}
/>

<Story
	name="visibility"
	args={{
		name: 'visibility',
		width: '20',
		height: '20'
	}}
/>

<Story
	name="visibility_disabled"
	args={{
		name: 'visibility_disabled',
		width: '20',
		height: '20'
	}}
/>
