<script>
	import Avatar from '../components/basic_elements/Avatar.svelte';
	import Button from '../components/basic_elements/Button.svelte';
	import Icon from '../components/basic_elements/Icon.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';
	import SnapUpsertActions from '../components/snap/SnapUpsertActions.svelte';
	import Images from '../components/snap/Images.svelte';
	import ImagesEmpty from '../components/snap/ImagesEmpty.svelte';

	import {get, set, isEmpty} from 'lodash';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let avatar = '';
	export let username = '';
	export let modal_visible = {};
	export let is_authenticated = false;
	export let navigationItems;
	export let snap_creation = {};

	async function handleAttachFile(event) {
		let file = event.detail;

		let file_array_buffer = file && new Uint8Array(await file.arrayBuffer());

		snap_creation = {...snap_creation, file_asset: {file_name: file.name}};

		console.log('page: file: ', file_array_buffer);
	}

	function handleRemoveFile(event) {
		let file = event.detail;

		set(snap_creation, 'file_asset', {});

		console.log('page file: ', file);
	}

	function generateId() {
		return Math.random().toString(36).substr(2, 9);
	}

	function handleAddImages(event) {
		let {img_data_urls, images_unit8Arrays} = event.detail;

		snap_creation = {
			...snap_creation,
			images: snap_creation.images || []
		};

		img_data_urls.forEach(({dataUrl, mimeType}, index) => {
			let newImage = {
				canister_id: '',
				id: generateId(),
				url: dataUrl,
				mimeType,
				data: images_unit8Arrays[index]
			};

			if (snap_creation.images.length < 12) {
				snap_creation.images = [...snap_creation.images, newImage];
			}
		});

		console.log('snap_creation: ', snap_creation);
	}

	function handleCancel() {
		console.log('cancel');
	}

	function handlePublish() {
		console.log('publish');
	}

	function handleRemove(event) {
		const image_id = event.detail;

		snap_creation = {
			...snap_creation,
			images: snap_creation.images.filter(image => image.id !== image_id)
		};
	}
</script>

<main>
	<html lang="en" class="dark">
		<body>
			<div class="grid_layout">
				<div class="navigation_main_layout">
					<PageNavigation {navigationItems}>
						<span>
							{#if is_authenticated}
								<Avatar {avatar} {username} />
								<Icon
									name="settings"
									size="2.75rem"
									class="cursor_pointer fill_dark_grey hover_smoky_grey"
									viewSize={{
										width: '44',
										height: '44'
									}}
								/>
							{:else}
								<Button primary={true} label="Connect" />
							{/if}
						</span>
					</PageNavigation>
				</div>

				<div class="content_layout">
					{#if isEmpty(snap_creation.images)}
						<ImagesEmpty content="Please add images" />
					{:else}
						<Images images={snap_creation.images} on:remove={handleRemove} />
					{/if}
				</div>

				<div class="actions_bar_layout">
					<SnapUpsertActions
						on:attachFile={handleAttachFile}
						on:removeFile={handleRemoveFile}
						on:addImages={handleAddImages}
						on:cancel={handleCancel}
						on:publish={handlePublish}
						snap={snap_creation}
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

<style lang="postcss">
	.grid_layout {
		@apply hidden lg:grid grid-cols-12 gap-y-2 ml-12 mr-12;
	}
	.navigation_main_layout {
		@apply row-start-1 row-end-auto col-start-1 col-end-13;
	}
	.navigation_main_layout span {
		@apply flex gap-x-3 cursor-pointer;
	}
	.content_layout {
		@apply row-start-3 row-end-auto col-start-1 col-end-9 mb-10 flex flex-col items-center mr-6;
	}
	.actions_bar_layout {
		@apply row-start-3 row-end-auto col-start-9 col-end-13 mb-10 flex justify-start;
	}
</style>
