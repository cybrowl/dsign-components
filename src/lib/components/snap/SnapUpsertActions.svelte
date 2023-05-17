<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	import get from 'lodash/get';

	import Button from '../basic_elements/Button.svelte';
	import Input from '../snap/Input.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import AttachDesignFileButton from './AttachDesignFileButton.svelte';
	import AddImagesButton from './AddImagesButton.svelte';

	export let snap = {};

	let snap_name = '';
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

	function handleCancel() {
		dispatch('cancel');
	}

	function handlePublish() {
		dispatch('publish', {
			snap_name: snap_name
		});
	}
</script>

<div class="actions_sticky">
	<div class="actions">
		<Input
			bind:value={snap_name}
			{placeholder}
			length={{min: '5', max: '50'}}
		/>

		<div class="category">
			<Icon name="upload_category" class="fill_none cursor_default" />
			<h3>Upload</h3>
		</div>

		<AttachDesignFileButton
			on:attachFile={handleAttachFile}
			on:removeFile={handleRemoveFile}
			file_name={get(snap, 'file_asset.file_name', '')}
		/>

		<AddImagesButton on:addImages={handleAddImages} />

		<div class="submit">
			<button on:click={handleCancel}>Cancel</button>
			<Button label="Publish" on:click={handlePublish} />
		</div>
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
	.submit {
		@apply text-white flex gap-4 mt-6 justify-end;
	}
</style>
