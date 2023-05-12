<script>
	import {createEventDispatcher} from 'svelte';
	import Input from '../basic_elements/Input.svelte';
	import Button from '../basic_elements/Button.svelte';
	import Icon from '../basic_elements/Icon.svelte';

	const dispatch = createEventDispatcher();

	export let errorMessage = '';
	export let hasError = false;
	export let isCreatingAccount = false;

	let clearValueOnFocus = true;
	let accepts_terms = false;

	const label = {
		name: 'Username',
		value: 'Username'
	};

	const length = {
		mix: 1,
		max: 20
	};

	let username = '';

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

	function handleOnClickAcceptPolicies() {
		accepts_terms = !accepts_terms;
	}
</script>

<div class="accountCreation">
	<h1>Choose Username</h1>

	<div class="requirements">
		<p>Use lower case letters and numbers only</p>
		<p>Must be 2-20 characters</p>
	</div>

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
	<div class="policies">
		<a
			href="https://github.com/cybrowl/dsign-components-v2/blob/main/src/lib/policies/privacy.md"
			target="_blank"
			rel="noopener noreferrer"
			>Privacy Policy
		</a>
		<a
			href="https://github.com/cybrowl/dsign-components-v2/blob/main/src/lib/policies/terms.md"
			target="_blank"
			rel="noopener noreferrer"
			>Terms Policy
		</a>
	</div>

	<div class="accept_policies">
		{#if accepts_terms === false}
			<Icon
				name="unchecked"
				class="cursor_pointer"
				size="1.5rem"
				on:click={handleOnClickAcceptPolicies}
			/>
		{:else}
			<Icon
				name="checkmark"
				class="cursor_pointer"
				size="1.5rem"
				on:click={handleOnClickAcceptPolicies}
			/>
		{/if}
		<p>Accept Policies</p>
	</div>

	<span class="primaryButon">
		<Button
			primary="true"
			label="Get started!"
			on:click={onClick}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
			primaryDisabled={!(
				username.length > 0 &&
				isCreatingAccount === false &&
				accepts_terms === true
			)}
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

	.accountCreation h1 {
		@apply text-4xl font-bold mb-6;
	}

	.requirements {
		@apply text-base mb-10;
	}

	.policies {
		@apply flex flex-col mt-8 gap-1 mb-4;
	}

	.accept_policies {
		@apply flex flex-row gap-3 text-primary-purple;
	}

	.accept_policies p {
		@apply cursor-default;
	}

	.policies a:hover {
		@apply text-primary-purple;
	}

	.primaryButon {
		@apply absolute bottom-0 right-0 pr-6 pb-6;
	}
</style>
