<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	import {get} from 'lodash';

	import TextArea from '../basic_elements/TextArea.svelte';
	import Button from '../basic_elements/Button.svelte';
	import AttachDesignFileButton from './AttachDesignFileButton.svelte';

	export let submit_button_label = 'Submit';
	export let is_sending = false;
	export let text_value = '';
	export let snap = {};
	export let is_uploading_design_file = false;

	let errorMessage = '';
	let file_name = '';
	let name = '';
	let file = {};

	function handleAttachFile(event) {
		file = event.detail;

		dispatch('attachFile', file);
	}

	function handleRemoveFile() {
		file = {};

		file_name = '';

		dispatch('removeFile', file);
	}

	function handleSubmit() {
		if (text_value.length < 1) {
			errorMessage = 'Note cannot be empty';
			return;
		}

		dispatch('submit', {name, file, text_value});
	}

	function handleCancel() {
		dispatch('cancel', {});
	}
</script>

<div class="feedback">
	<div class="name">
		<h1>{`# ${get(snap, 'title', '')} /`}</h1>
		<input bind:value={name} />
	</div>

	<AttachDesignFileButton
		class="feedback_styles"
		on:attachFile={handleAttachFile}
		on:removeFile={handleRemoveFile}
		bind:file_name
		{is_uploading_design_file}
	/>

	<div class="text_area_container">
		<TextArea
			bind:text_value
			word_limit={500}
			label="Notes"
			placeholder="Give feedback, ask a question, or just leave a note."
		/>
	</div>

	<div class="footer">
		<button class="cancel" on:click={handleCancel}>Cancel</button>
		<Button
			label={submit_button_label}
			primary={true}
			primaryDisabled={is_sending}
			on:click={handleSubmit}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		/>
	</div>
</div>

<style lang="postcss">
	.feedback {
		@apply p-10 w-[30rem];
	}
	.name {
		@apply flex flex-row my-6;
	}
	.name h1 {
		@apply text-moon-grey mr-2 whitespace-nowrap;
	}
	.name input {
		@apply bg-transparent border-none text-cloud-purple w-full outline-none;
		border-bottom: 1px solid #ebe9ff;
	}
	.text_area_container {
		@apply mt-4 mb-4;
	}
	.footer {
		@apply flex justify-end mt-12 gap-6 items-center;
	}
	.cancel {
		@apply text-white;
	}
</style>
