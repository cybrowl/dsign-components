<script>
	import Input from '../snap/Input.svelte';
	import Icon from '../basic_elements/Icon.svelte';

	let value;
	let placeholder = 'Add a name to your snap';
</script>

<div class="actions">
	<Input {value} {placeholder} />

	<div class="category">
		<Icon name="upload_category" class="fill_none" />
		<h3>Upload</h3>
	</div>

	<div class="category">
		<Icon name="organize_category" class="fill_white" />
		<h3>Organize</h3>
	</div>

	<div class="category">
		<Icon name="upload_category" class="fill_none" />
		<h3>Upload</h3>
	</div>
</div>

<style lang="postcss">
	.actions {
		@apply flex flex-col gap-y-6 font-sans font-bold;
	}
	.category {
		@apply flex flex-row text-white items-center gap-x-2;
	}
</style>
