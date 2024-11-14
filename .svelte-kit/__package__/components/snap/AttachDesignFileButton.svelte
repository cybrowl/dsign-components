<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	import isEmpty from 'lodash/isEmpty';

	import Icon from '../basic_elements/Icon.svelte';
	import JellyFish from '../loading_spinners/JellyFish.svelte';

	export let file_name = '';
	export let is_uploading_design_file = false;

	console.log('file_name: ', file_name);
	let file_input_elem;
	let file_too_large = false;
	let file;

	function triggerFileSelectionBrowser(e) {
		if (isEmpty(file_name)) {
			file_input_elem.click();
		}
	}

	function handleAttachFile(e) {
		const max_file_size = 25 * 1024 * 1024;

		file = e.target.files[0];

		if (file.size > max_file_size) {
			file_too_large = true;
		} else {
			file_too_large = false;

			file_name = file.name;

			dispatch('attachFile', file);
		}

		e.target.value = '';
	}

	async function handleRemoveFile() {
		dispatch('removeFile', file);
	}
</script>

<button
	class="attachDesignFile {$$props.class}"
	on:click={triggerFileSelectionBrowser}
>
	<span class="container">
		{#if file_name}
			{#if is_uploading_design_file}
				<JellyFish />
			{:else}
				<Icon
					name="design_file_attached"
					clickable={false}
					class="cursor_pointer"
					viewSize={{width: '55', height: '55'}}
					size="4rem"
				/>
			{/if}
			<span class="info">
				{#if is_uploading_design_file}
					<h3>Uploading file...</h3>
				{/if}
				<h4>{file_name}</h4>
			</span>

			<div class="close-icon-container">
				<Icon
					name="close_standard"
					clickable={true}
					on:click={handleRemoveFile}
					class="cursor_pointer fill_white hover_bubble_purple"
					size="1.5rem"
				/>
			</div>
		{:else}
			<Icon
				name="attach_design_file"
				clickable={false}
				class="cursor_pointer fill_dark_grey"
				viewSize={{width: '55', height: '55'}}
				size="4rem"
			/>
			<span class="info">
				<h4>Attach Design File</h4>
				<p class:file-too-large={file_too_large === true}>
					Max. file size 25 MB
				</p>
			</span>
		{/if}
	</span>
</button>

<input
	class="fileInput"
	type="file"
	accept=".fig"
	on:change={e => handleAttachFile(e)}
	bind:this={file_input_elem}
/>

<style>
	.attachDesignFile {
    width: 100%;
    border-radius: 0.375rem;
    --tw-bg-opacity: 1;
    background-color: rgb(33 32 41 / var(--tw-bg-opacity));
    font-family: Roboto, sans-serif;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem
}
	.info {
    margin-left: 0.5rem;
    -moz-column-gap: 0.5rem;
         column-gap: 0.5rem;
    text-align: start
}
	.info h3 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    font-style: italic
}
	.info p {
    font-size: 0.875rem;
    line-height: 1.25rem
}
	.fileInput {
    visibility: hidden;
    position: absolute;
    height: 0px;
    width: 0px
}
	.file-too-large {
    --tw-text-opacity: 1;
    color: rgb(240 98 124 / var(--tw-text-opacity))
}
	.close-icon-container {
    margin-left: auto
}
	.feedback_styles {
    height: 7rem
}
	.feedback_styles:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(27 26 34 / var(--tw-bg-opacity))
}
	.snap_upsert_styles {
    height: 9rem
}
	.snap_upsert_styles:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(50 49 61 / var(--tw-bg-opacity))
}
</style>
