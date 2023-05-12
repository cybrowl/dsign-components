<script>
	import {createEventDispatcher} from 'svelte';
	import Input from '../basic_elements/Input.svelte';
	import Button from '../basic_elements/Button.svelte';

	const dispatch = createEventDispatcher();

	export let errorMessage = '';
	export let hasError = false;
	export let isCreatingAccount = false;

	let clearValueOnFocus = true;

	const label = {
		name: 'Username',
		value: 'Username'
	};

	const length = {
		mix: 1,
		max: 20
	};

	let username;

	function onClick() {
		hasError = false;
		errorMessage = '';

		if (username.length < 2) {
			hasError = true;
			errorMessage = 'Username must be at least 2 characters long';
			return;
		}

		dispatch('click', {username});
	}
</script>

<div class="accountCreation">
	<h2>Choose Username</h2>
	<p>Use lower case letters and numbers only</p>
	<p>Must be 2-20 characters</p>
	<Input
		{clearValueOnFocus}
		{errorMessage}
		{hasError}
		{label}
		{length}
		autofocus={true}
		bind:value={username}
		isEdit="false"
		onlyAllowLettersAndNumbers={true}
	/>
	<a
		href="https://github.com/cybrowl/dsign-components-v2/blob/main/src/lib/policies/privacy.md"
		target="_blank"
		rel="noopener noreferrer"
		>Privacy Policy
	</a>
	<span class="primaryButon">
		<Button
			primary="true"
			label="Get started!"
			on:click={onClick}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
			primaryDisabled={isCreatingAccount}
		/>
	</span>
</div>

<style lang="postcss">
	.accountCreation {
		@apply font-sans text-white pb-28;
		min-width: 600px;
		padding-right: 20%;
		padding-left: 20%;
	}
	.accountCreation h2 {
		@apply text-4xl font-bold mb-4;
	}
	.accountCreation p:nth-child(3) {
		@apply text-base mb-20;
	}
	.accountCreation a {
		@apply block text-base mt-14;
	}
	.primaryButon {
		@apply absolute bottom-0 right-0 pr-6 pb-6;
	}
</style>
