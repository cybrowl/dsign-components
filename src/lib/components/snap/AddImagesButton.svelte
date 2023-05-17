<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	import Icon from '../basic_elements/Icon.svelte';

	let images = [];
	let error_message = '';

	let file_img_input_elem;

	function triggerFileSelectionBrowser(e) {
		file_img_input_elem.click();
	}

	async function convertFileToDataUrl(file) {
		let dataUrl = await new Promise(resolve => {
			let fileReader = new FileReader();

			fileReader.onload = event => {
				resolve(fileReader.result);
			};

			fileReader.readAsDataURL(file);
		});

		let splitDataUrl = dataUrl.split(',');

		let mimeType = splitDataUrl[0].split(':')[1].split(';')[0];
		// let base64Data = splitDataUrl[1];

		return {dataUrl: dataUrl, mimeType: mimeType};
	}

	async function generatePreviewImgs() {
		let fileDataUrlsPromises = images.map(image => {
			return convertFileToDataUrl(image);
		});

		let unit8ArrayImagesPromises = images.map(async image => {
			const arrayBuffer = await image.arrayBuffer();
			return new Uint8Array(arrayBuffer);
		});

		let [img_data_urls, images_unit8Arrays] = await Promise.all([
			Promise.all(fileDataUrlsPromises),
			Promise.all(unit8ArrayImagesPromises)
		]);

		images = [];

		dispatch('addImages', {img_data_urls, images_unit8Arrays});
	}

	function handleAddImages(e) {
		let files = e.target.files;

		const max_image_size = 2000000;

		error_message = '';

		[...files].forEach(file => {
			if (file.size > max_image_size) {
				error_message = 'Image size must be less than 2MB';
				return;
			}
			images.push(file);
		});

		generatePreviewImgs();
		e.target.value = '';
	}
</script>

<button class="addImages" on:click={triggerFileSelectionBrowser}>
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
			<p>Max. 2 MB</p>
			<p>Max. # 12</p>
		</span>
	</span>
</button>

<input
	class="imgsInput"
	type="file"
	multiple={true}
	accept=".jpg, .jpeg, .png, .gif, .webp"
	on:change={e => handleAddImages(e)}
	bind:this={file_img_input_elem}
/>

<style lang="postcss">
	.addImages {
		@apply font-sans text-white bg-black-a h-36 w-full rounded-md hover:bg-dark-grey;
	}

	.container {
		@apply flex flex-col items-center pl-4 pr-4;
	}

	.info {
		@apply gap-x-2;
	}

	.info p {
		@apply text-sm text-start;
	}

	.imgsInput {
		@apply invisible w-0 h-0 absolute;
	}
</style>
