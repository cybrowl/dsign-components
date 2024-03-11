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
	import JellyFish from '../loading_spinners/JellyFish.svelte';

	export let snap = {};

	let snap_name = snap.name || '';
	let tags_added = snap.tags || [];
	let has_error = false;
	let images_empty_error = false;
	let publish_attempted = false;

	$: placeholder = 'Add a name to your snap';
	$: design_file_filename = snap?.design_file?.[0]?.name || '';

	export let is_publishing = false;
	export let is_edit_mode = false;
	export let is_uploading_design_file = false;
	let show_feature = false;

	// Update these reactive statements to depend on publish_attempted
	$: has_error = publish_attempted && !snap_name.length;
	$: images_empty_error =
		publish_attempted && get(snap, 'images', []).length === 0;

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

		console.log('preview_images: ', preview_images);

		dispatch('addImages', preview_images);
	}

	function handleCancel() {
		dispatch('cancel');
	}

	function handleUpdate(event) {
		tags_added = event.detail;
	}

	function handlePublish() {
		publish_attempted = true; // Set to true on publish attempt
		const has_images = get(snap, 'images', []).length > 0;

		if (!snap_name.length || !has_images) {
			has_error = !snap_name.length;
			images_empty_error = !has_images;
			return; // Do not proceed with publishing
		}

		if (snap_name.length && get(snap, 'images', []).length) {
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
			class="snap_upsert_styles"
			on:attachFile={handleAttachFile}
			on:removeFile={handleRemoveFile}
			file_name={design_file_filename}
			{is_uploading_design_file}
			hover_active={true}
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

		{#if is_edit_mode === false}
			<div class="submit">
				{#if is_publishing === false}
					<button on:click={handleCancel}>Cancel</button>
				{/if}
				<Button
					label={is_publishing ? 'Creating' : 'Create'}
					on:click={handlePublish}
					primaryDisabled={is_publishing}
				/>
			</div>
		{/if}

		{#if is_edit_mode === true}
			{#if is_publishing === false}
				<div class="submit">
					<button on:click={handleCancel}>back</button>
				</div>
			{/if}

			{#if is_publishing === true}
				<div class="submit">
					<JellyFish />
				</div>
			{/if}
		{/if}

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
