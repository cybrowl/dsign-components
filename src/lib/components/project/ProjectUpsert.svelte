<script>
	import Input from '../basic_elements/Input.svelte';
	import Button from '../basic_elements/Button.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let header = '';
	export let loading_msg = '';
	export let project_name_default = '';
	export let submit_button_label = '';
	export let is_sending = false;

	let hasError = false;
	let isProjectNameFocused = false;
	let isProjectDescriptionFocused = false;
	let errorMessage = '';
	let project_name = project_name_default;
	let project_description = '';
	let project_description_prev = '';

	function handleSubmit() {
		if (project_name.length < 1) {
			hasError = true;
			errorMessage = 'Project name cannot be empty';
			return;
		}

		dispatch('submit', {project_name, project_description});
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
		<div class="project_name">
			<Input
				autofocus={false}
				on:focus={() => {
					isProjectNameFocused = true;
				}}
				on:blur={() => {
					isProjectNameFocused = false;
				}}
				label={{
					name: 'Project Name',
					value: 'Project Name'
				}}
				isFocused={isProjectNameFocused}
				{hasError}
				{errorMessage}
				bind:value={project_name}
				capitalizeFirstLetter={true}
				length={{min: 1, max: 35}}
				placeholder=""
			/>
		</div>

		<label
			for="description"
			class="description-label"
			class:focused={isProjectDescriptionFocused === true}>Description *</label
		>
		<textarea
			class:focused={isProjectDescriptionFocused === true}
			bind:value={project_description}
			on:focus={() => {
				isProjectDescriptionFocused = true;
			}}
			on:blur={() => {
				isProjectDescriptionFocused = false;
			}}
			on:input={event => {
				const words = event.target.value.split(/\s+/);
				if (words.length > 20) {
					project_description = project_description_prev;
				} else {
					project_description_prev = project_description = event.target.value;
				}
			}}
			class="description"
			placeholder="Project description"
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
		@apply p-10 w-[30rem];
	}
	.project_name {
		@apply mb-4;
	}
	.description-label {
		@apply mt-2 text-white;
	}
	.description {
		@apply mt-2 p-2 h-32 border border-gray-300 rounded bg-dark-grey text-cloud-purple w-full outline-0;
	}
	.focused {
		@apply text-bubble-purple border-bubble-purple;
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
