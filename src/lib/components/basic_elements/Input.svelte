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

<style lang="postcss">
	.label {
		@apply mb-1.5 text-white;
	}
	.input {
		@apply bg-smoky-grey border border-solid rounded border-white px-3 py-2 text-white w-full outline-0;
	}
	.input_container {
		@apply font-sans;
	}
	.input_container span {
		@apply flex items-center;
	}
	.focused {
		@apply text-bubble-purple border-bubble-purple;
	}
	.error_label {
		@apply text-mute-red;
	}
	.error_input {
		@apply mr-4 border-mute-red;
	}
	.error_msg {
		@apply mt-2.5 text-mute-red;
	}
</style>
