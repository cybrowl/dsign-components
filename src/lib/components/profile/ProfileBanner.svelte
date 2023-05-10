<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	import Icon from '../basic_elements/Icon.svelte';

	export let profile_banner_url = '';
	export let is_authenticated = false;
	let fileinput;

	function editProfileBanner(event) {
		fileinput.click();

		dispatch('editProfileBanner', event);
	}

	const onFileSelected = e => {
		let files = e.target.files;

		dispatch('profileBannerChange', files);
	};
</script>

<div class="profileBanner">
	{#if profile_banner_url.length > 0}
		<img src={profile_banner_url} alt="profile banner" />
	{/if}
	{#if is_authenticated}
		<span
			class="editProfileBanner"
			on:click={editProfileBanner}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon class="editProfileBanner" name="edit" width="40" height="40" />
		</span>
		<input
			class="input"
			type="file"
			multiple={false}
			accept=".jpg, .jpeg, .png, .gif"
			on:change={e => onFileSelected(e)}
			bind:this={fileinput}
		/>
	{/if}
</div>

<style lang="postcss">
	.profileBanner {
		@apply relative h-64 w-full object-cover rounded bg-black-a;
	}
	.editProfileBanner {
		@apply absolute top-0 right-0 p-2 rounded;
	}
	.profileBanner img {
		@apply object-cover h-full w-full rounded;
	}
	.input {
		@apply invisible w-0 h-0;
	}
</style>
