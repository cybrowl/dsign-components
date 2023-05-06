<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import FavoriteCardEmpty from '../lib/components/FavoriteCardEmpty.svelte';
</script>

<Meta
	title="Cards/FavoriteCardEmpty"
	component={FavoriteCardEmpty}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<FavoriteCardEmpty {...args} on:click={args.onClick} />
</Template>

<Story name="Default" args={{}} />
