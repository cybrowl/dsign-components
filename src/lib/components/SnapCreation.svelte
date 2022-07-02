<script>
    import {createEventDispatcher} from 'svelte';
    import {fade, fly} from 'svelte/transition';
    import Input from '../components/Input.svelte';
    import Button from '../components/Button.svelte';

    const dispatch = createEventDispatcher();

    export let errorMessage = '';
    export let hasError = false;

    export let multiple = true;

    let clearValueOnFocus = false;
    let fileinput;

    let snapImages = [];
    let previewSnapImages = [null, null, null, null];

    const label = {
        name: 'Title',
        value: 'Title'
    };

    const length = {
        mix: 1,
        max: 500
    };

    let title;

    function onAddImages(event) {
        fileinput.click();
    }

    async function readFileAsDataURL(file) {
        let result_base64 = await new Promise(resolve => {
            let fileReader = new FileReader();
            fileReader.onload = e => resolve(fileReader.result);
            fileReader.readAsDataURL(file);
        });

        return result_base64;
    }

    function generatePreview() {
        if (snapImages.length > 4) {
            console.log('too many images');
            return null;
        }
        previewSnapImages = [];

        let snapImagesPreviewPromises = snapImages.map(image => {
            return readFileAsDataURL(image);
        });

        const remainingImages = 4 - snapImages.length;
        const previewImgEmpty = new Array(remainingImages).fill(null);

        snapImagesPreviewPromises = [...snapImagesPreviewPromises, ...previewImgEmpty];

        let snapImagesPreview = snapImagesPreviewPromises.map(async imagePromise => {
            if (imagePromise == null) {
                previewSnapImages = [null, ...previewSnapImages];
            } else {
                const image = await imagePromise;

                previewSnapImages = [image, ...previewSnapImages];

                return image;
            }
        });
    }

    const onFilesSelected = e => {
        let files = e.target.files;

        [...files].forEach(file => {
            snapImages.unshift(file);
        });

        generatePreview();
    };

    function onCreateSnap() {
        dispatch('onCreateSnap', snapImages);
    }
</script>

<div class="snapCreation">
    <h1>Get started on your work/snap?</h1>
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
        on:change={e => onFilesSelected(e)}
        bind:this={fileinput}
    />
    <div class="addImagesButton">
        <Button secondary="true" label="Add Images" on:click={onAddImages} />
    </div>
    <h2 class="previewHeading">Preview</h2>
    <div class="previewSnapImages">
        {#each previewSnapImages as previewSnapImage}
            {#if previewSnapImage == null}
                <span class="previewImgEmpty" />
            {:else}
                <span>
                    <img class="previewImg" src={previewSnapImage} alt="snap" />
                </span>
            {/if}
        {/each}
    </div>
    <span class="publishButton">
        <Button primary="true" label="Publish" on:click={onCreateSnap} />
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
        @apply text-3xl font-bold mb-6;
    }
    .addImagesButton {
        @apply mt-10 mb-10;
    }
    .previewHeading {
        @apply text-2xl;
    }
    .previewSnapImages {
        @apply flex space-x-4;
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
