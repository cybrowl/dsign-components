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

<style lang="postcss">
	.inputContainer {
		@apply flex items-center font-sans text-xl;
	}

	.input {
		@apply bg-transparent border-none px-3 py-2 w-full outline-0 text-mist-grey font-bold italic 
		caret-tulip-purple placeholder:text-white;
	}

	.error {
		@apply text-mute-red placeholder:text-mute-red;
	}
</style>
