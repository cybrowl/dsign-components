<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import SnapCardCreate from '../../lib/components/cards/SnapCardCreate.svelte';
</script>

<Meta title="Cards/SnapCardCreate" component={SnapCardCreate} argTypes={{}} />

<Template let:args>
	<div class="m-6">
		<SnapCardCreate {...args} on:click={args.onClick} />
	</div>
</Template>

<Story name="Default" args={{}} />
