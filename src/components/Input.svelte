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
    const onFocus = () => (isFocused = true);
    const onBlur = () => (isFocused = false);
</script>

<span class="font-sans">
    <label for="fusername" name={label.name}>
        <p class={isFocused ? 'text-bubble-purple mb-1.5' : 'text-white mb-1.5'}>
            {label.value}
        </p>
    </label>
    <span class="flex items-center">
        <!-- svelte-ignore a11y-autofocus -->
        <input
            id="fusername"
            {autofocus}
            on:focus={onFocus}
            on:blur={onBlur}
            type="text"
            minlength={length.min}
            maxlength={length.max}
            class="bg-smoky-grey border border-solid
        rounded border-white px-3 py-2 text-white w-60 outline-0 focus:border-bubble-purple mr-4"
            bind:value={inputVal}
            {placeholder}
        />
        <Icon name="error_sign" width="30" height="30" />
    </span>
</span>

<style>
</style>
