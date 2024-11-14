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

<style>
	.profileInfoContainer {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center
}

	.profileInfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 0.5rem;
		font-family: Roboto, sans-serif;
		font-size: 1.25rem;
		line-height: 1.75rem;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity))
}

	.cropAvatar {
		position: relative;
		display: flex;
		height: 10rem;
		width: 10rem;
		cursor: pointer;
		align-items: center;
		border-radius: 0.375rem;
		--tw-bg-opacity: 1;
		background-color: rgb(23 23 23 / var(--tw-bg-opacity))
}

	.avatarUsername {
		position: relative;
		display: flex;
		height: 10rem;
		width: 10rem;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		--tw-bg-opacity: 1;
		background-color: rgb(23 23 23 / var(--tw-bg-opacity));
		font-family: Roboto, sans-serif;
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: 700;
		text-transform: uppercase;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity))
}

	.avatarImg {
		max-height: 10rem;
		width: 10rem;
		border-radius: 0.375rem;
		background-color: transparent;
		-o-object-fit: cover;
		   object-fit: cover;
		clip-path: inset(0 0 0 0 round 0)
}
</style>
