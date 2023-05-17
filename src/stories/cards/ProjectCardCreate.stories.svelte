<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProjectCardCreate from '../../lib/components/cards/ProjectCardCreate.svelte';
</script>

<Meta
	title="Cards/ProjectCardCreate"
	component={ProjectCardCreate}
	argTypes={{createProject: {action: 'onClick'}}}
/>

<Template let:args>
	<div class="m-6">
		<ProjectCardCreate {...args} on:createProject={args.createProject} />
	</div>
</Template>

<Story name="Default" args={{}} />
