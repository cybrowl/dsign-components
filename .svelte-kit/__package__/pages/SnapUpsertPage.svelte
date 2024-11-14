<script>
	import Login from '../components/login/Login.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';
	import SnapUpsertActions from '../components/snap/SnapUpsertActions.svelte';
	import Images from '../components/snap/Images.svelte';
	import ImagesEmpty from '../components/snap/ImagesEmpty.svelte';

	import {isEmpty} from 'lodash';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let my_profile = {};
	export let modal_visible = {};
	export let is_edit_mode = false;
	export let is_authenticated = false;
	export let navigationItems;
	export let snap_upsert_store = {
		snap: {}
	};
	export let is_publishing = false;
	export let is_uploading_design_file = false;

	async function handleAttachFile(event) {
		let file = event.detail;

		let file_array_buffer = file && new Uint8Array(await file.arrayBuffer());

		snap_upsert_store = {
			snap: {
				...snap_upsert_store.snap,
				design_file: {filename: file.name}
			}
		};

		console.log('page: file: ', file_array_buffer);
	}

	function handleRemoveFile(event) {
		let file = event.detail;

		snap_upsert_store = {
			snap: {
				...snap_upsert_store.snap,
				design_file: {filename: ''}
			}
		};

		console.log('page file: ', file);
	}

	function handleAddImages(event) {
		let {imageData} = event.detail;

		snap_upsert_store = {
			snap: {
				...snap_creation,
				images: snap_upsert_store.snap.images || []
			}
		};

		imageData.forEach(({id, url, mimeType, uint8Array, fileName}, index) => {
			let newImage = {
				id: id,
				fileName,
				url: url,
				mimeType,
				data: uint8Array
			};

			if (snap_upsert_store.snap.images.length < 12) {
				snap_upsert_store.snap.images = [
					...snap_upsert_store.snap.images,
					newImage
				];
			}
		});

		console.log('snap_upsert_store.snap: ', snap_upsert_store.snap);
	}

	function handleCancel() {
		console.log('cancel');
	}

	function handlePublish(event) {
		const publish_res = event.detail;

		console.log('publish', publish_res);
	}

	function handleSelectCover(event) {
		const cover_img = event.detail;

		console.log('cover_img', cover_img);
	}

	function remove_image(event) {
		const image_selected = event.detail;

		snap_upsert_store = {
			snap: {
				...snap_upsert_store.snap
			},
			images: snap_upsert_store.snap.images.filter(
				image => image.id !== image_selected.id
			)
		};
	}

	function snap_name_change(event) {
		console.log('snap_name_change: ', event);
	}

	function update_tags(event) {
		console.log('update_tags: ', event);
	}
</script>

<main>
	<html lang="en" class="dark">
		<body>
			<div class="grid_layout">
				<div class="navigation_main_layout">
					<PageNavigation {navigationItems}>
						<Login {is_authenticated} {my_profile} />
					</PageNavigation>
				</div>

				<div class="content_layout">
					{#if isEmpty(snap_upsert_store.snap.images)}
						<ImagesEmpty content="Please add images" />
					{:else}
						<Images
							images={snap_upsert_store.snap.images}
							on:remove={remove_image}
							on:selectCover={handleSelectCover}
						/>
					{/if}
				</div>

				<div class="actions_bar_layout">
					<SnapUpsertActions
						on:attachFile={handleAttachFile}
						on:removeFile={handleRemoveFile}
						on:addImages={handleAddImages}
						on:cancel={handleCancel}
						on:publish={handlePublish}
						on:update_tags={update_tags}
						on:snap_name_change={snap_name_change}
						snap={snap_upsert_store.snap}
						{is_edit_mode}
						{is_publishing}
						{is_uploading_design_file}
					/>
				</div>
			</div>
		</body>
	</html>
</main>

<!-- Mobile Not Supported -->
<div class="grid lg:hidden h-screen place-items-center text-white text-4xl">
	<h1>Sorry, Mobile Not Supported</h1>
</div>

<style>
	.grid_layout {
    margin-left: 3rem;
    margin-right: 3rem;
    display: none;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    row-gap: 0.5rem
}
@media (min-width: 1024px) {
    .grid_layout {
        display: grid
    }
}
@media (min-width: 1536px) {
    .grid_layout {
        margin-left: 15rem;
        margin-right: 15rem
    }
}
	.navigation_main_layout {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: auto
}
	.content_layout {
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 3;
    grid-row-end: auto;
    margin-bottom: 2.5rem;
    margin-right: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center
}
	.actions_bar_layout {
    grid-column-start: 9;
    grid-column-end: 13;
    grid-row-start: 3;
    grid-row-end: auto;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: flex-start
}
</style>
