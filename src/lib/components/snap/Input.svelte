<script>
	import Icon from '../basic_elements/Icon.svelte';

	export let length = {
		min: '',
		max: ''
	};
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
		id="finput"
		maxlength={length.max}
		minlength={length.min}
		on:input={() => {}}
		type="text"
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
</style>
