<script>
    import Icon from '../components/Icon.svelte';

    export let value;

    export let autofocus = false;
    export let label = {
        name: '',
        value: ''
    };

    export let length = {
        min: '',
        max: ''
    };

    export let placeholder = '';
    export let onlyAllowLettersAndNumbers = false;
    export let hasError = false;
    export let errorMessage = '';
    export let clearValueOnFocus = false;

    let isFocused = autofocus;
    const onFocus = () => {
        isFocused = true;

        if (clearValueOnFocus) {
            value = '';
        }
        hasError = false;
        errorMessage = '';
    };

    const onBlur = () => (isFocused = false);

    function onlyLowercaseLettersAndNumbers(str) {
        return /^[a-z0-9]*$/.test(str);
    }
</script>

<span class="inputContainer">
    <label for="finput" name={label.name} class="label">
        <p class:focused={isFocused === true} class:errorLabel={hasError === true}>
            {label.value}
        </p>
    </label>
    <span>
        <!-- svelte-ignore a11y-autofocus -->
        <input
            {autofocus}
            {placeholder}
            bind:value
            autocomplete="off"
            class="input"
            class:errorInput={hasError === true}
            id="finput"
            maxlength={length.max}
            minlength={length.min}
            on:blur={onBlur}
            on:focus={onFocus}
            on:input={() => {
                if (onlyAllowLettersAndNumbers) {
                    if (onlyLowercaseLettersAndNumbers(value)) {
                        hasError = false;
                    } else {
                        hasError = true;
                    }
                }
            }}
            type="text"
        />
        {#if hasError}
            <Icon name="error_sign" width="30" height="30" />
        {/if}
    </span>
    {#if hasError}
        <p class="errorMessage">{errorMessage}</p>
    {/if}
</span>

<style>
    .label {
        @apply mb-1.5 text-white;
    }
    .input {
        @apply bg-smoky-grey border border-solid rounded border-white px-3 py-2 text-white w-full outline-0;
    }
    .inputContainer {
        @apply font-sans;
    }
    .inputContainer span {
        @apply flex items-center;
    }
    .focused {
        color: #b6affc;
    }
    .errorLabel {
        color: #f0627c;
    }
    .errorInput {
        margin-right: 1rem;
        border-color: #f0627c;
    }
    .errorMessage {
        color: #f0627c;
        @apply mt-2.5;
    }
</style>
