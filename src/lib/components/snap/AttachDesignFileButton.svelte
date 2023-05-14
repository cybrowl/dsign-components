<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	import Icon from '../basic_elements/Icon.svelte';

	let file_input_elem;
	let file_too_large = false;

	function handleClick() {
		file_input_elem.click();
	}

	function onFileSelected(e) {
		const max_file_size = 25 * 1024 * 1024;

		let file = e.target.files[0];

		if (file.size > max_file_size) {
			file_too_large = true;
		} else {
			file_too_large = false;

			dispatch('click', file);
		}

		e.target.value = '';
	}
</script>

<button class="attachDesignFile" on:click={handleClick}>
	<span class="container">
		<Icon
			name="attach_design_file"
			clickable={false}
			class="cursor_pointer fill_dark_grey"
			viewSize={{width: '55', height: '55'}}
			size="4rem"
		/>
		<span class="info">
			<h4>Attach Design File</h4>
			<p class:file-too-large={file_too_large === true}>Max. file size 25 MB</p>
		</span>
	</span>
</button>

<input
	class="fileInput"
	type="file"
	accept=".fig, .sketch"
	on:change={e => onFileSelected(e)}
	bind:this={file_input_elem}
/>

<style lang="postcss">
	.attachDesignFile {
		@apply font-sans text-white bg-black-a h-36 rounded-md hover:bg-dark-grey;
	}

	.container {
		@apply flex flex-row items-center ml-6;
	}

	.info {
		@apply ml-2 text-start gap-x-2;
	}

	.fileInput {
		@apply invisible w-0 h-0 absolute;
	}

	.file-too-large {
		@apply text-error-red;
	}
</style>
