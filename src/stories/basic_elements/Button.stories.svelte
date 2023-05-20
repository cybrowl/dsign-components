<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import Button from '../../lib/components/basic_elements/Button.svelte';
</script>

<Meta
	title="Basic Elements/Button"
	component={Button}
	argTypes={{
		destroy: {control: 'boolean'},
		destroyDisabled: {control: 'boolean'},
		label: {control: 'text'},
		onClick: {action: 'onClick'},
		primary: {control: 'boolean'},
		primaryDisabled: {control: 'boolean'},
		secondary: {control: 'boolean'},
		secondaryDisabled: {control: 'boolean'},
		tertiary: {control: 'boolean'},
		tertiaryDisabled: {control: 'boolean'},
		size: {
			control: {type: 'select'},
			options: ['medium']
		}
	}}
/>

<Template let:args>
	<div class="m-6">
		<Button {...args} on:click={args.onClick} />
	</div>
</Template>

<Story
	name="Primary"
	args={{
		primary: true,
		secondary: false,
		label: 'Button'
	}}
/>

<!-- 
<Story
	name="Primary & Hover"
	args={{
		primary: true,
		label: 'Button',
		class: 'hover_lilalic_purple'
	}}
/>

<Story
	name="Primary/Disabled"
	args={{
		label: 'Button',
		primary: true,
		primaryDisabled: true
	}}
/>

<Story
	name="Secondary"
	args={{
		secondary: true,
		label: 'Button'
	}}
/>

<Story
	name="Secondary/Disabled"
	args={{
		label: 'Button',
		secondary: true,
		secondaryDisabled: true
	}}
/>

<Story
	name="Tertiary"
	args={{
		tertiary: true,
		label: 'Button'
	}}
/>

<Story
	name="Tertiary/Disabled"
	args={{
		label: 'Button',
		tertiary: true,
		tertiaryDisabled: true
	}}
/>

<Story
	name="Destroy"
	args={{
		destroy: true,
		label: 'Button'
	}}
/>

<Story
	name="Destroy/Disabled"
	args={{
		label: 'Button',
		destroy: true,
		destroyDisabled: true
	}}
/>

<Story
	name="Filter"
	args={{
		label: '# Fonts',
		filter: true
	}}
/>

<Story
	name="Filter"
	args={{
		label: '# Fonts',
		class: 'button--filter'
	}}
/>

<Story
	name="Filter/Active"
	args={{
		label: '# Fonts',
		class: 'button--filter-active'
	}}
/> -->
