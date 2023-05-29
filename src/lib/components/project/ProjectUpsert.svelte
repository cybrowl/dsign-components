<script>
	import Input from '../basic_elements/Input.svelte';
	import Button from '../basic_elements/Button.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let header = '';
	export let loading_msg = '';
	export let project_name = '';
	export let submit_button_label = '';
	export let is_sending = false;

	let hasError = false;
	let errorMessage = '';

	function handleSubmit() {
		if (project_name.length < 1) {
			hasError = !hasError;
			errorMessage = 'Project name cannot be empty';
			return;
		}

		dispatch('submit', {project_name});
	}

	function handleCancel() {
		dispatch('cancel', {project_name});
	}
</script>

<div class="project_upsert">
	<h2 class="header">{header}</h2>
	{#if is_sending}
		<p class="loading">{loading_msg} <strong>{project_name}</strong> ...</p>
	{:else}
		<Input
			autofocus={true}
			on:focus={() => {
				hasError = !hasError;
			}}
			{hasError}
			{errorMessage}
			bind:value={project_name}
			capitalizeFirstLetter={true}
			length={{min: 1, max: 35}}
			placeholder="Project name"
		/>
	{/if}
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
	.project_upsert {
		@apply p-10 w-96;
	}
	.loading {
		@apply text-white italic;
	}
	.header {
		@apply text-white font-sans mb-6 text-lg;
	}
	.footer {
		@apply flex justify-end mt-12 gap-6 items-center;
	}
	.cancel {
		@apply text-white;
	}
</style>
