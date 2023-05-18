<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import JellyFish from '../../lib/components/loading_spinners/JellyFish.svelte';
	import Circle from '../../lib/components/loading_spinners/Circle.svelte';
</script>

<Meta
	title="Basic Elements/Spinners"
	argTypes={{component: {control: 'text'}}}
/>

<Template let:args>
	<div class="m-6">
		{#if args.component === 'JellyFish'}
			<JellyFish {...args} />
		{:else if args.component === 'Circle'}
			<Circle {...args} />
		{/if}
	</div>
</Template>

<Story name="JellyFish" args={{component: 'JellyFish', arg1: 'example'}} />
<Story name="Circle" args={{component: 'Circle', arg2: 'example'}} />
