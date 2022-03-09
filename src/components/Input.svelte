<script>
    import Icon from '../components/Icon.svelte';

    let inputVal = '';

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

    let isFocused = autofocus;
    export let hasError = false;

    const onFocus = () => {
        isFocused = true;
        hasError = false;
    };
    const onBlur = () => (isFocused = false);
</script>

<span class="font-sans">
    <label for="finput" name={label.name} class="mb-1.5 text-white">
        <p class:focused={isFocused === true} class:errorLabel={hasError === true}>
            {label.value}
        </p>
    </label>
    <span class="flex items-center">
        <!-- svelte-ignore a11y-autofocus -->
        <input
            id="finput"
            {autofocus}
            on:focus={onFocus}
            on:blur={onBlur}
            type="text"
            minlength={length.min}
            maxlength={length.max}
            class="bg-smoky-grey border border-solid rounded border-white px-3 py-2 text-white w-60 outline-0 focus:border-bubble-purple mr-4"
            class:errorInput={hasError === true}
            bind:value={inputVal}
            {placeholder}
        />
        {#if hasError}
            <Icon name="error_sign" width="30" height="30" />
        {/if}
    </span>
</span>

<style>
    .focused {
        color: #b6affc;
    }

    .errorLabel {
        color: #f0627c;
    }

    .errorInput {
        border-color: #f0627c;
    }
</style>
