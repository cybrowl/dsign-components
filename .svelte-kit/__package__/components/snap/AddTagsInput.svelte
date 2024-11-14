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
	export let placeholder = 'Add a tag...';
	export let onlyAllowLettersAndNumbers = false;

	let value;
</script>

<span class="input_container">
	<span>
		<Icon
			class="add_tags"
			name="add_tags"
			clickable={false}
			viewSize={{
				width: '25',
				height: '25'
			}}
		/>

		<!-- svelte-ignore a11y-autofocus -->
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

<style>
	.input {
    width: 100%;
    border-radius: 0.25rem;
    --tw-bg-opacity: 1;
    background-color: rgb(33 32 41 / var(--tw-bg-opacity));
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
    outline-width: 0px
}
	.input_container {
    font-family: Roboto, sans-serif
}
	.input_container span {
    position: relative;
    margin-bottom: 1rem;
    display: flex;
    align-items: center
}
	.focused {
    --tw-border-opacity: 1;
    border-color: rgb(182 175 252 / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
</style>
