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

<style>
	.label {
    margin-top: 0.5rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.text_area {
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
	.focused_label {
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
	.focused_text_area {
    --tw-border-opacity: 1;
    border-color: rgb(182 175 252 / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: rgb(235 233 255 / var(--tw-text-opacity))
}
</style>
