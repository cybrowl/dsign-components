<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	import get from 'lodash/get';

	import Input from '../snap/Input.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import AttachDesignFileButton from './AttachDesignFileButton.svelte';
	import AddImagesButton from './AddImagesButton.svelte';

	export let snap = {};

	let value;
	let placeholder = 'Add a name to your snap';

	const show_feature = false;

	function handleAttachFile(event) {
		let file = event.detail;

		dispatch('attachFile', file);
	}

	function handleRemoveFile(event) {
		let file = event.detail;

		dispatch('removeFile', file);
	}

	function handleAddImages(event) {
		let preview_images = event.detail;

		dispatch('addImages', preview_images);
	}
</script>

<div class="actions_sticky">
	<div class="actions">
		<Input {value} {placeholder} />

		<div class="category">
			<Icon name="upload_category" class="fill_none cursor_default" />
			<h3>Upload</h3>
		</div>

		<AttachDesignFileButton
			on:attachFile={handleAttachFile}
			on:removeFile={handleRemoveFile}
			file_asset={get(snap, 'file_asset')}
		/>

		<AddImagesButton on:addImages={handleAddImages} />

		{#if show_feature}
			<div class="category">
				<Icon name="organize_category" class="fill_white cursor_default" />
				<h3>Organize</h3>
			</div>

			<div class="category">
				<Icon
					name="add_tags"
					class="fill_none cursor_default"
					viewSize={{width: '31.5', height: '24'}}
				/>
				<h3>Add Tags</h3>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.actions_sticky {
		@apply relative w-full;
	}
	.actions {
		@apply sticky top-10 right-0 flex flex-col gap-y-6 font-sans font-bold;
	}
	.category {
		@apply flex flex-row text-white items-center gap-x-2 cursor-default;
	}
</style>
