<script>
    export let inputVal = '';
    export let label = {
        name: '',
        value: ''
    };

    export let placeholder = '';
</script>

<span>
    <label class="flex flex-col-reverse" name={label.name}>
        <input
            class="peer font-sans bg-smoky-grey border border-solid
            rounded border-white px-3 py-2 text-white w-60 outline-0 focus:border-bubble-purple"
            bind:value={inputVal}
            {placeholder}
        />
        <span class="font-sans text-white block mb-1.5 peer-focus:text-bubble-purple">
            {label.value}
        </span>
    </label>
</span>

<style>
</style>
