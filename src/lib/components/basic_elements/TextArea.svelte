<script>
	export let label = '';
	export let placeholder = '';
	export let text_value = '';
	export let word_limit = 20;

	let is_focused = true;
	let text_value_prev = '';

	function limit_number_words(event) {
		const words = event.target.value.split(/\s+/);

		if (words.length > word_limit) {
			text_value = text_value_prev;
		} else {
			text_value_prev = text_value = event.target.value;
		}
	}
</script>

<label for="text_area" class="label" class:focused_label={is_focused === true}
	>{label}</label
>
<textarea
	class="text_area"
	class:focused_text_area={is_focused === true}
	bind:value={text_value}
	on:focus={() => {
		is_focused = true;
	}}
	on:blur={() => {
		is_focused = false;
	}}
	on:input={limit_number_words}
	{placeholder}
/>

<style lang="postcss">
	.label {
		@apply mt-2 text-white;
	}
	.text_area {
		@apply mt-2 p-2 h-32 border border-gray-300 rounded bg-dark-grey text-cloud-purple w-full outline-0;
	}
	.focused_label {
		@apply text-bubble-purple;
	}
	.focused_text_area {
		@apply border-bubble-purple text-cloud-purple;
	}
</style>
