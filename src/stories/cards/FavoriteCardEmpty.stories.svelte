<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import FavoriteCardEmpty from '../../lib/components/cards/FavoriteCardEmpty.svelte';
</script>

<Meta
	title="Cards/FavoriteCardEmpty"
	component={FavoriteCardEmpty}
	argTypes={{
		onClick: {action: 'onClick'}
	}}
/>

<Template let:args>
	<div class="hidden lg:grid grid-cols-12 gap-y-2 relative">
		<div class="col-start-2 col-end-12 grid grid-cols-3 row-start-3 row-end-auto mx-4 gap-x-10 gap-y-20 mt-2 mb-24">
			<FavoriteCardEmpty {...args} on:click={args.onClick} />
		</div>
	</div>
</Template>

<Story name="Default" args={{}} />
