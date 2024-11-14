<script>
	import Icon from './Icon.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let errorMessage = '';
	export let hasError = false;
	export let label = {
		name: '',
		value: ''
	};
	export let length = {
		min: '',
		max: ''
	};
	export let isFocused = false;
	export let placeholder = '';
	export let value;

	export let onlyAllowLettersAndNumbers = false;
	export let capitalizeFirstLetter = false;
</script>

<span class="input_container">
	<label for="finput" name={label.name} class="label">
		<p class:focused={isFocused === true} class:error_label={hasError === true}>
			{label.value}
		</p>
	</label>
	<span>
		<!-- svelte-ignore a11y-autofocus -->
		<input
			{placeholder}
			bind:value
			autocomplete="off"
			class="input"
			class:error_input={hasError === true}
			class:focused={isFocused === true}
			id="finput"
			maxlength={length.max}
			minlength={length.min}
			on:blur={() => {
				dispatch('blur');
			}}
			on:focus={() => {
				dispatch('focus');
			}}
			on:input={() => {
				if (onlyAllowLettersAndNumbers) {
					value = value.replace(/[^a-z0-9]/g, '');
				}

				if (capitalizeFirstLetter) {
					value = value.charAt(0).toUpperCase() + value.slice(1);
				}
			}}
			type="text"
		/>
		{#if hasError}
			<Icon name="error_sign" />
		{/if}
	</span>
	{#if hasError}
		<p class="error_msg">{errorMessage}</p>
	{/if}
</span>

<style>
	.label {
    margin-bottom: 0.375rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.input {
    width: 100%;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    --tw-border-opacity: 1;
    border-color: rgb(255 255 255 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(69 67 82 / var(--tw-bg-opacity));
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    outline-width: 0px
}
	.input_container {
    font-family: Roboto, sans-serif
}
	.input_container span {
    display: flex;
    align-items: center
}
	.focused {
    --tw-border-opacity: 1;
    border-color: rgb(182 175 252 / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
	.error_label {
    --tw-text-opacity: 1;
    color: rgb(240 98 124 / var(--tw-text-opacity))
}
	.error_input {
    margin-right: 1rem;
    --tw-border-opacity: 1;
    border-color: rgb(240 98 124 / var(--tw-border-opacity))
}
	.error_msg {
    margin-top: 0.625rem;
    --tw-text-opacity: 1;
    color: rgb(240 98 124 / var(--tw-text-opacity))
}
</style>
