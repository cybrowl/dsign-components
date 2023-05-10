<script>
	import {createEventDispatcher} from 'svelte';

	import Button from '../basic_elements/Button.svelte';

	export let avatar = '';
	export let username = '';
	export let is_owner = false;

	const dispatch = createEventDispatcher();

	function editProfile() {
		dispatch('editProfile');
	}
</script>

{#if avatar.length > 3}
	<div class="profileInfoContainer">
		<div class="profileInfo">
			<div class="cropAvatar">
				<img alt="avatar" class="avatarImg" src={avatar} />
			</div>
			<p>{username}</p>

			{#if is_owner}
				<Button
					tertiary={true}
					label="Edit Profile"
					on:click={editProfile}
					on:keypress={e => {
						//TODO: need to design how this will work A11y
					}}
				/>
			{/if}
		</div>
	</div>
{:else}
	<div class="profileInfoContainer">
		<div class="profileInfo">
			<div class="avatarUsername">
				<p>
					{username.charAt(0)}
					{username.charAt(username.length - 1)}
				</p>
			</div>
			<p>{username}</p>

			{#if is_owner}
				<Button
					tertiary={true}
					label="Edit Profile"
					on:click={editProfile}
					on:keypress={e => {
						//TODO: need to design how this will work A11y
					}}
				/>
			{/if}
		</div>
	</div>
{/if}

<style lang="postcss">
	.profileInfoContainer {
		@apply flex justify-center items-center h-full;
	}

	.profileInfo {
		@apply flex flex-col items-center gap-y-2 font-sans text-white;
	}

	.profileInfo p {
		@apply text-xl;
	}

	.cropAvatar {
		@apply relative w-40 h-40 flex items-center rounded-md bg-neutral-900 cursor-pointer;
	}

	.avatarUsername {
		@apply relative font-sans font-bold w-40 h-40 flex justify-center items-center
		bg-neutral-900 text-white uppercase cursor-pointer;
	}

	.avatarUsername p {
		@apply text-4xl;
	}

	.avatarImg {
		@apply bg-transparent rounded-md w-40 max-h-40;
		clip-path: inset(0 0 0 0 round 0);
	}
</style>
