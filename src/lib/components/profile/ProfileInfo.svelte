<script>
	import {createEventDispatcher} from 'svelte';

	import Button from '../basic_elements/Button.svelte';

	export let avatar = '';
	export let username = '';
	export let is_owner = false;

	const dispatch = createEventDispatcher();

	function handleEditProfile() {
		dispatch('editProfile');
	}
</script>

<div class="profileInfoContainer">
	<div class="profileInfo">
		{#if avatar.length > 3}
			<div class="cropAvatar">
				<img alt="avatar" class="avatarImg" src={avatar} />
			</div>
		{:else}
			<div class="avatarUsername">
				<p>
					{username.charAt(0)}
					{username.charAt(username.length - 1)}
				</p>
			</div>
		{/if}

		<p>{username}</p>

		{#if is_owner}
			<Button
				tertiary={true}
				label="Edit Profile"
				on:click={handleEditProfile}
				on:keypress={e => {
					//TODO: need to design how this will work A11y
				}}
			/>
		{/if}
	</div>
</div>

<style lang="postcss">
	.profileInfoContainer {
		@apply flex justify-center items-center h-full;
	}

	.profileInfo {
		@apply flex flex-col items-center gap-y-2 font-sans text-white text-xl;
	}

	.cropAvatar {
		@apply relative w-40 h-40 flex items-center rounded-md bg-neutral-900 cursor-pointer;
	}

	.avatarUsername {
		@apply relative font-sans font-bold w-40 h-40 flex justify-center items-center
		bg-neutral-900 text-white uppercase cursor-pointer text-4xl;
	}

	.avatarImg {
		@apply bg-transparent rounded-md w-40 max-h-40 object-cover;
		clip-path: inset(0 0 0 0 round 0);
	}
</style>
