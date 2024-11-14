<script>
	import Icon from '../basic_elements/Icon.svelte';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let length = {
		min: '',
		max: ''
	};
	export let has_error = false;
	export let placeholder = '';
	export let value;
</script>

<span class="inputContainer">
	<Icon
		name="add_name"
		clickable={false}
		class="fill_none"
		size="2rem"
		viewSize={{width: '32', height: '32'}}
	/>

	<input
		{placeholder}
		bind:value
		autocomplete="off"
		class="input"
		class:error={has_error === true}
		id="finput"
		maxlength={length.max}
		minlength={length.min}
		type="text"
		on:focus={() => {
			dispatch('error');
		}}
	/>
</span>

<style>
	.inputContainer {

    display: flex;

    align-items: center;

    font-family: Roboto, sans-serif;

    font-size: 1.25rem;

    line-height: 1.75rem
}

	.input {

    width: 100%;

    border-style: none;

    background-color: transparent;

    padding-left: 0.75rem;

    padding-right: 0.75rem;

    padding-top: 0.5rem;

    padding-bottom: 0.5rem;

    font-weight: 700;

    font-style: italic;

    --tw-text-opacity: 1;

    color: rgb(177 176 184 / var(--tw-text-opacity));

    caret-color: #6259C8;

    outline-width: 0px
}

	.input::-moz-placeholder {

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

	.input::placeholder {

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

	.error {

    --tw-text-opacity: 1;

    color: rgb(240 98 124 / var(--tw-text-opacity))
}

	.error::-moz-placeholder {

    --tw-text-opacity: 1;

    color: rgb(240 98 124 / var(--tw-text-opacity))
}

	.error::placeholder {

    --tw-text-opacity: 1;

    color: rgb(240 98 124 / var(--tw-text-opacity))
}
</style>
