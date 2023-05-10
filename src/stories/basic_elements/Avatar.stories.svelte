<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import Avatar from '../../lib/components/basic_elements/Avatar.svelte';
</script>

<Meta
	title="Basic Elements/Avatar"
	component={Avatar}
	argTypes={{
		onClick: {action: 'onClick'},
		avatar: {control: 'text'},
		username: {control: 'text'},
		canEditAvatar: {control: 'boolean'}
	}}
/>

<Template let:args>
	<div class="m-6">
		<Avatar {...args} on:click={args.onClick} />
	</div>
</Template>

<Story
	name="Default/Mishicat"
	args={{
		avatar: 'https://i.ibb.co/KVfVsg0/Coffee.png'
	}}
/>

<Story
	name="Default/Motoko"
	args={{
		avatar: 'https://i.ibb.co/TRJmsGT/motoko.png'
	}}
/>

<Story
	name="Default/Initials"
	args={{
		username: 'Motoko'
	}}
/>

<Story
	name="Default/EditAvatar"
	args={{
		avatar: 'https://i.ibb.co/TRJmsGT/motoko.png',
		canEditAvatar: true
	}}
/>
