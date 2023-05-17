<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import LoadingSpinner from '../../lib/components/basic_elements/LoadingSpinner.svelte';
</script>

<Meta
	title="Basic Elements/LoadingSpinner"
	component={LoadingSpinner}
	argTypes={{}}
/>

<Template let:args>
	<div class="m-6">
		<LoadingSpinner {...args} />
	</div>
</Template>

<Story name="Default" args={{}} />
