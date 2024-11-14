<script>
	import Input from '../basic_elements/Input.svelte';
	import Button from '../basic_elements/Button.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let is_sending = false;
	export let content = {};

	let hasError = false;
	let isProjectNameFocused = false;
	let isProjectDescriptionFocused = false;
	let errorMessage = '';
	let project_name = content.project_name;
	let project_description = content.project_description;
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
	<h2 class="header">{content.header}</h2>
	{#if is_sending}
		<p class="loading">
			{content.loading_msg} <strong>{project_name}</strong> ...
		</p>
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
			label={content.submit_button_label}
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
	.project_upsert {
    width: 30rem;
    padding: 2.5rem
}
	.project_name {
    margin-bottom: 1rem
}
	.description-label {
    margin-top: 0.5rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.description {
    margin-top: 0.5rem;
    height: 8rem;
    width: 100%;
    border-radius: 0.25rem;
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgb(209 213 219 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(50 49 61 / var(--tw-bg-opacity));
    padding: 0.5rem;
    --tw-text-opacity: 1;
    color: rgb(235 233 255 / var(--tw-text-opacity));
    outline-width: 0px
}
	.focused {
    --tw-border-opacity: 1;
    border-color: rgb(182 175 252 / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
	.loading {
    font-style: italic;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.header {
    margin-bottom: 1.5rem;
    font-family: Roboto, sans-serif;
    font-size: 1.125rem;
    line-height: 1.75rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
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
