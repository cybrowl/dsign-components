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

<style>
	.feedback {
		width: 30rem;
		padding: 2.5rem
}
	.name {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
		display: flex;
		flex-direction: row
}
	.name h1 {
		margin-right: 0.5rem;
		white-space: nowrap;
		--tw-text-opacity: 1;
		color: rgb(198 196 204 / var(--tw-text-opacity))
}
	.name input {
		width: 100%;
		border-style: none;
		background-color: transparent;
		--tw-text-opacity: 1;
		color: rgb(235 233 255 / var(--tw-text-opacity));
		outline: 2px solid transparent;
		outline-offset: 2px;
		border-bottom: 1px solid #ebe9ff
}
	.text_area_container {
		margin-top: 1rem;
		margin-bottom: 1rem
}
	.footer {
		margin-top: 3rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 1.5rem
}
	.cancel {
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity))
}
</style>
