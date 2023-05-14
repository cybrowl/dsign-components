<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import CardEmpty from '../../lib/components/cards/CardEmpty.svelte';
</script>

<Meta
	title="Cards/CardEmpty"
	component={CardEmpty}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<div class="hidden lg:grid grid-cols-12 gap-y-2 relative">
		<div
			class="col-start-2 col-end-12 grid grid-cols-3 row-start-3 row-end-auto mx-4 gap-x-10 gap-y-20 mt-2 mb-24"
		>
			<CardEmpty {...args} on:click={args.onClick} />
		</div>
	</div>
</Template>

<Story name="Default" args={{}} />

<Story
	name="Favorites Empty"
	args={{
		name: 'project_empty',
		content: 'No favorite projects',
		view_size: {width: '92', height: '92'}
	}}
/>

<Story
	name="Project Empty"
	args={{
		name: 'snap_empty',
		content: 'No snaps',
		view_size: {width: '64', height: '64'}
	}}
/>

<Story
	name="No Projects"
	args={{
		name: 'project_empty',
		content: 'No projects found',
		view_size: {width: '92', height: '92'}
	}}
/>
