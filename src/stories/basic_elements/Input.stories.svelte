<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import Input from '../../lib/components/basic_elements/Input.svelte';
</script>

<Meta
	title="Basic Elements/Input"
	component={Input}
	argTypes={{
		autofocus: {control: 'boolean'},
		capitalizeFirstLetter: {control: 'boolean'},
		clearValueOnFocus: {control: 'boolean'},
		errorMessage: {control: 'text'},
		hasError: {control: 'boolean'},
		label: {
			name: 'text',
			value: 'text'
		},
		length: {
			name: 'number',
			value: 'number'
		},
		onlyAllowLettersAndNumbers: {control: 'boolean'},
		placeholder: {control: 'text'},
		value: {control: 'text'}
	}}
/>

<Template let:args>
	<div class="m-6">
		<Input {...args} on:click={args.onClick} />
	</div>
</Template>

<Story
	name="Selected"
	args={{
		autofocus: true,
		label: {
			name: 'Username',
			value: 'Username'
		},
		length: {
			mix: 1,
			max: 20
		},
		onlyAllowLettersAndNumbers: true
	}}
/>

<Story
	name="Lowercase A-Z"
	args={{
		autofocus: true,
		onlyAllowLettersAndNumbers: true,
		label: {
			name: 'Username',
			value: 'Username'
		},
		length: {
			mix: 1,
			max: 20
		},
		value: ''
	}}
/>

<Story
	name="Capitalize First Letter"
	args={{
		autofocus: true,
		capitalizeFirstLetter: true,
		label: {
			name: 'Username',
			value: 'Username'
		},
		length: {
			mix: 1,
			max: 20
		},
		value: ''
	}}
/>

<Story
	name="Capitalize First Letter"
	args={{
		autofocus: true,
		capitalizeFirstLetter: true,
		label: {
			name: 'Username',
			value: 'Username'
		},
		length: {
			mix: 1,
			max: 20
		},
		value: ''
	}}
/>

<Story
	name="Placeholder"
	args={{
		placeholder: 'Jefri',
		label: {
			name: 'Username',
			value: 'Username'
		},
		length: {
			mix: 1,
			max: 20
		},
		value: ''
	}}
/>

<Story
	name="Error"
	args={{
		autofocus: false,
		hasError: true,
		label: {
			name: 'Username',
			value: 'Username'
		},
		length: {
			mix: 1,
			max: 20
		}
	}}
/>

<Story
	name="Error Message"
	args={{
		autofocus: false,
		hasError: true,
		errorMessage: 'Username Taken',
		label: {
			name: 'Username',
			value: 'Username'
		},
		length: {
			mix: 1,
			max: 20
		}
	}}
/>
