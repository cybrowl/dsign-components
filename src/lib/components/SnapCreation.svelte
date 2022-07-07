<script>
    import {createEventDispatcher, onDestroy} from 'svelte';
    import Button from '../components/Button.svelte';
    import Icon from '../components/Icon.svelte';
    import Input from '../components/Input.svelte';

    const dispatch = createEventDispatcher();

    export let errorMessage = '';
    export let hasError = false;

    export let multiple = true;

    let clearValueOnFocus = false;
    let file_input_elem;

    let snap_image_files = [];
    let preview_snap_images = [null, null, null, null];

    const label = {
        name: 'Title',
        value: 'Title'
    };

    const length = {
        mix: 1,
        max: 500
    };

    let title;

    onDestroy(() => {
        snap_image_files = [null, null, null, null];
    });

    function on_add_images() {
        file_input_elem.click();
    }

    async function read_file_as_data_url(file) {
        let result_base64 = await new Promise(resolve => {
            let fileReader = new FileReader();
            fileReader.onload = e => resolve(fileReader.result);
            fileReader.readAsDataURL(file);
        });

        return result_base64;
    }

    function generate_preview() {
        if (snap_image_files.length > 4) {
            console.log('too many images');
            return null;
        }
        preview_snap_images = [];

        let snapImagesPreviewPromises = snap_image_files.map(image => {
            return read_file_as_data_url(image);
        });

        Promise.all(snapImagesPreviewPromises).then(snap_base64_images => {
            const remaining_images = 4 - snap_image_files.length;
            const empty_image = new Array(remaining_images).fill(null);

            preview_snap_images = [...snap_base64_images, ...empty_image];
        });
    }

    function on_files_selected(e) {
        let files = e.target.files;

        [...files].forEach(file => {
            // TODO: check img is below max MB
            snap_image_files.push(file);
        });

        generate_preview();
    }

    function on_create_snap() {
        dispatch('on_create_snap', {title, snap_image_files});
    }

    function on_remove_image(i) {
        snap_image_files.splice(i, 1);
        generate_preview();
    }
</script>

<div class="snapCreation">
    <h1>Publish Your Work</h1>
    <Input
        {clearValueOnFocus}
        {errorMessage}
        {hasError}
        {label}
        {length}
        autofocus={true}
        bind:value={title}
        isEdit="false"
        onlyAllowLettersAndNumbers={false}
    />
    <input
        class="input"
        type="file"
        {multiple}
        accept=".jpg, .jpeg, .png, .gif"
        on:change={e => on_files_selected(e)}
        bind:this={file_input_elem}
    />
    <div class="addImagesButton">
        <Button secondary="true" label="Attach Images" on:click={on_add_images} />
    </div>
    <h2 class="previewHeading">Preview</h2>
    <div class="previewSnapImages">
        {#each preview_snap_images as preview_image, i}
            {#if preview_image == null}
                <span class="previewImgEmpty" />
            {:else}
                <div class="previewImgContainer">
                    <span on:click={() => on_remove_image(i)}
                        ><Icon class="removeSnapImg" name="close_upload" width="24" height="24" /></span
                    >
                    <img class="previewImg" src={preview_image} alt="snap" />
                </div>
            {/if}
        {/each}
    </div>
    <span class="publishButton">
        <Button primary="true" label="Publish" on:click={on_create_snap} />
    </span>
</div>

<style>
    .snapCreation {
        @apply font-sans text-white pb-28;
        padding-left: 14%;
        padding-right: 14%;
        min-width: 700px;
    }
    .snapCreation h1 {
        @apply text-3xl font-bold mb-6 text-center;
    }
    .addImagesButton {
        @apply mt-10 mb-10;
    }
    .previewHeading {
        @apply text-base mb-4;
    }
    .previewSnapImages {
        @apply flex space-x-4;
    }
    .previewImgContainer {
        @apply relative;
    }
    .previewImg {
        width: 125px;
        height: 116px;
        border-radius: 6px;
    }
    .previewImgEmpty {
        width: 125px;
        height: 116px;
        border: 1px dashed #f2f2f2;
        border-radius: 6px;
    }
    .input {
        @apply invisible w-0 h-0;
    }
    .publishButton {
        @apply absolute bottom-0 right-0 pr-6 pb-6;
    }
</style>
