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

<style lang="postcss">
	.attachDesignFile {
		@apply font-sans text-white bg-black-a w-full rounded-md;
	}
	.container {
		@apply flex flex-row items-center pl-6 pr-6;
	}
	.info {
		@apply ml-2 text-start gap-x-2;
	}
	.info h3 {
		@apply text-base font-bold italic;
	}
	.info p {
		@apply text-sm;
	}
	.fileInput {
		@apply invisible w-0 h-0 absolute;
	}
	.file-too-large {
		@apply text-mute-red;
	}
	.close-icon-container {
		@apply ml-auto;
	}
	.feedback_styles {
		@apply h-28 hover:bg-backdrop;
	}
	.snap_upsert_styles {
		@apply h-36 hover:bg-dark-grey;
	}
</style>
