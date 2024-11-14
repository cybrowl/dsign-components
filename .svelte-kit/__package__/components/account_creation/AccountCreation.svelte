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

<style>
	.accountCreation {

    width: 38rem;

    padding-bottom: 7rem;

    padding-top: 5rem;

    padding-right: 5rem;

    padding-left: 5rem;

    font-family: Roboto, sans-serif;

    --tw-text-opacity: 1;

    color: rgb(255 255 255 / var(--tw-text-opacity))
}

	.accountCreation h1 {

    margin-bottom: 1.5rem;

    font-size: 2.25rem;

    line-height: 2.5rem;

    font-weight: 700
}

	.requirements {

    margin-bottom: 2.5rem;

    font-size: 1rem;

    line-height: 1.5rem
}

	.policies {

    margin-top: 2rem;

    margin-bottom: 1rem;

    display: flex;

    flex-direction: column;

    gap: 0.25rem
}

	.accept_policies {

    display: flex;

    flex-direction: row;

    gap: 0.75rem;

    --tw-text-opacity: 1;

    color: rgb(122 113 222 / var(--tw-text-opacity))
}

	.accept_policies p {

    cursor: default
}

	.policies a:hover {

    --tw-text-opacity: 1;

    color: rgb(122 113 222 / var(--tw-text-opacity))
}

	.primaryButon {

    position: absolute;

    bottom: 0px;

    right: 0px;

    padding-right: 1.5rem;

    padding-bottom: 1.5rem
}
</style>
