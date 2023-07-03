<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	import get from 'lodash/get';

	import Button from '../basic_elements/Button.svelte';
	import Input from '../snap/Input.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import AttachDesignFileButton from './AttachDesignFileButton.svelte';
	import AddImagesButton from './AddImagesButton.svelte';
	import AddTags from './AddTags.svelte';

	export let snap = {};

	let tags_added = snap.tags;

	export let is_publishing = false;
	export let is_uploading_design_file = false;

	let snap_name = snap.title || '';
	let placeholder = 'Add a name to your snap';
	let has_error = false;
	let images_empty_error = false;

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

	function handleUpdate(event) {
		tags_added = event.detail;
	}

	function handlePublish() {
		const has_images = get(snap, 'images', []).length > 0 ? true : false;

		if (!snap_name.length) {
			has_error = true;
		}

		if (!has_images) {
			images_empty_error = true;
		}

		if (has_images && snap_name.length) {
			dispatch('publish', {snap_name, tags_added});
		}
	}
</script>

<div class="actions_sticky">
	<div class="actions">
		<Input
			bind:value={snap_name}
			{placeholder}
			{has_error}
			length={{min: '5', max: '50'}}
			on:error={() => {
				has_error = false;
			}}
		/>

		<AttachDesignFileButton
			on:attachFile={handleAttachFile}
			on:removeFile={handleRemoveFile}
			file_name={get(snap, 'file_asset.file_name', '')}
			{is_uploading_design_file}
		/>

		<div class="img_actions">
			<AddImagesButton
				on:addImages={handleAddImages}
				{images_empty_error}
				on:error={() => {
					images_empty_error = false;
				}}
			/>
		</div>

		<div class="tags_add">
			<AddTags {tags_added} on:update={handleUpdate} />
		</div>

		<div class="submit">
			<button on:click={handleCancel}>Cancel</button>
			<Button
				label="Publish"
				on:click={handlePublish}
				primaryDisabled={is_publishing}
			/>
		</div>

		{#if show_feature}
			<div class="category">
				<Icon name="organize_category" class="fill_white cursor_default" />
				<h3>Organize</h3>
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
	.img_actions {
		@apply grid grid-cols-3;
	}
	.tags_add {
		@apply grid grid-cols-1;
	}
	.category {
		@apply flex flex-row text-white items-center gap-x-2 cursor-default;
	}
	.submit {
		@apply text-white flex gap-4 mt-6 justify-end;
	}
</style>
