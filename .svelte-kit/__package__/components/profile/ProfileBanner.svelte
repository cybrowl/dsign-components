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
		const MAX_SIZE = 4 * 1024 * 1024; // 4 MB
		const file = e.target.files[0];

		if (file.size <= MAX_SIZE) {
			dispatch('profileBannerChange', file);
		} else {
			dispatch('error', 'Max Img File Size 4MB');
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

<style>
	.profileBanner {
		position: relative;
		width: 100%;
		border-radius: 0.25rem;
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity));
		-o-object-fit: cover;
		   object-fit: cover;
		padding-bottom: 22%
}
	.profileBanner img {
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 0.25rem;
		--tw-bg-opacity: 1;
		background-color: rgb(33 32 41 / var(--tw-bg-opacity));
		-o-object-fit: cover;
		   object-fit: cover
}
	.editIcon {
		position: absolute;
		top: 0px;
		right: 0px;
		border-radius: 0.25rem;
		padding: 0.5rem
}
	.input {
		visibility: hidden;
		height: 0px;
		width: 0px
}
</style>
