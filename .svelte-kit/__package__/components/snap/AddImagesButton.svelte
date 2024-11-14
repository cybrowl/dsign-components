<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import {generateUUID} from '../../utils/uuid';

	const dispatch = createEventDispatcher();

	let images = [];
	let error_message = '';
	export let images_empty_error = false;

	let file_img_input_elem;

	// Utility functions
	async function readFileAsDataURL(file) {
		return new Promise(resolve => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.readAsDataURL(file);
		});
	}

	async function fileToArrayBuffer(file) {
		const arrayBuffer = await file.arrayBuffer();
		return new Uint8Array(arrayBuffer);
	}

	async function processImages(files) {
		const maxImageSize = 2_000_000; // 2MB in bytes
		images = [...files].filter(file => {
			const isValidSize = file.size <= maxImageSize;
			if (!isValidSize) {
				error_message = 'Image size must be less than 2MB';
				images_empty_error = true;
			}
			return isValidSize;
		});

		if (images.length > 0) {
			images_empty_error = false;
			await generatePreviewImages();
		}
	}

	async function generatePreviewImages() {
		const imageDataPromises = images.map(async image => {
			const url = await readFileAsDataURL(image);
			const uint8Array = await fileToArrayBuffer(image);
			const fileName = image.name;
			return {
				id: generateUUID(),
				url,
				is_new: true,
				mimeType: image.type,
				uint8Array,
				fileName
			};
		});

		const imageData = await Promise.all(imageDataPromises);
		dispatch('addImages', {imageData});
		images = [];
	}

	// Event handlers
	function triggerFileSelection() {
		file_img_input_elem.click();
	}

	function handleAddImages(event) {
		processImages(event.target.files);
		event.target.value = ''; // Reset input after processing
	}
</script>

<button class="addImages" on:click={triggerFileSelection}>
	<span class="container">
		<Icon
			name="attach_images"
			clickable={false}
			class="cursor_pointer fill_dark_grey"
			viewSize={{width: '40', height: '40'}}
			size="3rem"
		/>
		<span class="info">
			<h4>Add Images</h4>
			<p class:error={images_empty_error}>Max. 2 MB</p>
		</span>
	</span>
</button>

<input
	class="imgsInput"
	type="file"
	multiple={true}
	accept=".jpg, .jpeg, .png, .gif, .webp"
	on:change={handleAddImages}
	bind:this={file_img_input_elem}
/>

<style>
	.addImages {

    height: 9rem;

    width: 100%;

    border-radius: 0.375rem;

    --tw-bg-opacity: 1;

    background-color: rgb(33 32 41 / var(--tw-bg-opacity));

    font-family: Roboto, sans-serif;

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

.addImages:hover {

    --tw-bg-opacity: 1;

    background-color: rgb(50 49 61 / var(--tw-bg-opacity))
}

	.container {

    display: flex;

    flex-direction: column;

    align-items: center;

    padding-left: 1rem;

    padding-right: 1rem
}

	.info {

    -moz-column-gap: 0.5rem;

         column-gap: 0.5rem
}

	.info p {

    text-align: start;

    font-size: 0.875rem;

    line-height: 1.25rem
}

	.error {

    --tw-text-opacity: 1;

    color: rgb(240 98 124 / var(--tw-text-opacity))
}

	.imgsInput {

    visibility: hidden;

    position: absolute;

    height: 0px;

    width: 0px
}
</style>
