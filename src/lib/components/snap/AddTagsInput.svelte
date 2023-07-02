<script>
	import Icon from '../basic_elements/Icon.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let autofocus = false;

	export let length = {
		min: '',
		max: ''
	};
	export let isFocused = autofocus;
	export let placeholder = '';
	export let onlyAllowLettersAndNumbers = false;

	let value;
</script>

<span class="input_container">
	<span>
		<!-- svelte-ignore a11y-autofocus -->
		<Icon
			class="add_tags"
			name="add_tags"
			clickable={false}
			viewSize={{
				width: '25',
				height: '25'
			}}
		/>

		<input
			{autofocus}
			{placeholder}
			bind:value
			autocomplete="off"
			class="input"
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
					value = value.replace(/[^a-z0-9]/gi, '');
				}
				value = value.toLowerCase();
			}}
			on:keydown={e => {
				if (e.key === 'Enter') {
					dispatch('enter', value);

					value = '';
				}
			}}
			type="text"
		/>
	</span>
</span>

<style lang="postcss">
	.input {
		@apply bg-black-a rounded pl-12 py-4 text-white w-full outline-0;
	}
	.input_container {
		@apply font-sans;
	}
	.input_container span {
		@apply flex relative items-center mb-4;
	}
	.focused {
		@apply text-bubble-purple border-bubble-purple;
	}
</style>
