<script>
	import Avatar from '../components/basic_elements/Avatar.svelte';
	import Button from '../components/basic_elements/Button.svelte';
	import Icon from '../components/basic_elements/Icon.svelte';
	import PageNavigation from '../components/navigation/PageNavigation.svelte';
	import SnapUpsertActions from '../components/snap/SnapUpsertActions.svelte';
	import Images from '../components/snap/Images.svelte';

	import get from 'lodash/get';
	import set from 'lodash/set';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let avatar = '';
	export let username = '';
	export let modal_visible = {};
	export let is_authenticated = false;
	export let navigationItems;
	export let snap_preview = {};

	async function handleAttachFile(event) {
		let file = event.detail;

		let file_array_buffer = file && new Uint8Array(await file.arrayBuffer());

		set(snap_preview, 'file_asset.file_name', file.name);

		console.log('page: file: ', file_array_buffer);
	}

	function handleRemoveFile(event) {
		let file = event.detail;

		console.log('page file: ', file);
	}

	function generateId() {
		return Math.random().toString(36).substr(2, 9);
	}

	function handleAddImages(event) {
		let {snap_base64_images, images_unit8Arrays} = event.detail;

		console.log('page: images_unit8Arrays: ', images_unit8Arrays);
		console.log('snap_preview: ', snap_preview);

		set(snap_preview, 'images', get(snap_preview, 'images', []));

		snap_base64_images.forEach((url, index) => {
			let newImage = {
				canister_id: '',
				id: generateId(),
				url: url
			};

			if (snap_preview.images.length <= 12) {
				snap_preview.images = [...snap_preview.images, newImage];
				console.log('snap_preview: ', snap_preview);
			}
		});
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
					<Images images={snap_preview.images} />
				</div>

				<div class="actions_bar_layout">
					<SnapUpsertActions
						on:attachFile={handleAttachFile}
						on:removeFile={handleRemoveFile}
						on:addImages={handleAddImages}
						snap={snap_preview}
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
