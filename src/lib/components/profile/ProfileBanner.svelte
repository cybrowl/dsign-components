<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	import Icon from '../basic_elements/Icon.svelte';

	export let profile_banner_url = '';
	export let is_owner = false;
	let fileinput;

	function handleEditProfileBanner(event) {
		fileinput.click();
	}

	function handleFileSelection(e) {
		const maxSize = 2 * 1024 * 1024; // 2 MB
		const file = e.target.files[0];

		if (file.size <= maxSize) {
			dispatch('profileBannerChange', file);
		} else {
			dispatch('error', 'Max Img File Size 2MB');
		}
	}
</script>

<div class="profileBanner">
	{#if profile_banner_url.length > 0}
		<img src={profile_banner_url} alt="profile banner" />
	{/if}
	{#if is_owner}
		<span
			class="editIcon"
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
			role="button"
			tabindex="0"
		>
			<Icon
				class="cursor_pointer fill_dark_grey hover_tulip_purple"
				name="edit"
				size="2.5rem"
				viewSize={{
					width: '40',
					height: '40'
				}}
				on:click={handleEditProfileBanner}
			/>
		</span>
		<input
			class="input"
			type="file"
			multiple={false}
			accept=".jpg, .jpeg, .png, .gif, .webp"
			on:change={e => handleFileSelection(e)}
			bind:this={fileinput}
		/>
	{/if}
</div>

<style lang="postcss">
	.profileBanner {
		@apply relative w-full object-cover rounded bg-black-a;
		padding-bottom: 22%;
	}
	.profileBanner img {
		@apply absolute bg-black-a object-cover w-full h-full rounded;
	}
	.editIcon {
		@apply absolute top-0 right-0 p-2 rounded;
	}
	.input {
		@apply invisible w-0 h-0;
	}
</style>
