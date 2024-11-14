<script>
	import {createEventDispatcher} from 'svelte';
	import Avatar from '../basic_elements/Avatar.svelte';

	const dispatch = createEventDispatcher();

	export let avatar = '';
	export let multiple = false;
	export let username = '';
	let fileinput;

	let nav = {
		isProfileSelected: true,
		isSettingsSelected: false
	};

	function onClickAvatar(event) {
		fileinput.click();

		dispatch('clickAvatar', event);
	}

	function onLogOut(event) {
		dispatch('clickLogOut', event);
	}

	const onFileSelected = e => {
		const MAX_SIZE = 4 * 1024 * 1024; // 4 MB
		const file = e.target.files[0];

		if (file.size <= MAX_SIZE) {
			dispatch('avatarChange', file);
		} else {
			dispatch('error', 'Max Img File Size 4MB');
		}
	};

	function onClickProfile() {
		nav.isProfileSelected = true;
		nav.isSettingsSelected = false;
	}

	function onClickSettings() {
		nav.isProfileSelected = false;
		nav.isSettingsSelected = true;
	}
</script>

<div class="settings">
	<div class="nav">
		<span>
			<button
				on:click={onClickProfile}
				on:keypress={e => {
					//TODO: need to design how this will work A11y
				}}
				class:nav-selected={nav.isProfileSelected === true}
			>
				Profile</button
			>
			<button
				on:click={onClickSettings}
				on:keypress={e => {
					//TODO: need to design how this will work A11y
				}}
				class:nav-selected={nav.isSettingsSelected === true}>Settings</button
			>
			<button
				on:click={onLogOut}
				on:keypress={e => {
					//TODO: need to design how this will work A11y
				}}>Log Out</button
			>
		</span>
	</div>
	{#if nav.isProfileSelected}
		<div class="content">
			<span class="avatar">
				<Avatar
					{avatar}
					canEditAvatar={true}
					{username}
					on:click={onClickAvatar}
				/>
				<h2>{username}</h2>
			</span>

			<div class="body">
				<span class="username">
					<h2>Username</h2>
					<p>{username}</p>
				</span>
			</div>
		</div>
		<input
			class="input"
			type="file"
			{multiple}
			accept=".jpg, .jpeg, .png, .gif"
			on:change={e => onFileSelected(e)}
			bind:this={fileinput}
		/>
	{/if}

	{#if nav.isSettingsSelected}
		<div class="content">
			<div><h3>Theme: Dark</h3></div>
		</div>
	{/if}
</div>

<style>
	.settings {
    margin-left: 1.5rem;
    display: flex;
    width: 34rem;
    flex-direction: row;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.nav {
    flex-basis: 20%
}
	.nav span {
    display: flex;
    flex-direction: column;
    align-items: flex-start
}
	.nav button {
    margin-bottom: 1rem
}
	.nav-selected {
    --tw-text-opacity: 1;
    color: rgb(182 175 252 / var(--tw-text-opacity))
}
	.nav button:nth-child(3) {
    margin-top: 15rem;
    --tw-text-opacity: 1;
    color: rgb(240 98 124 / var(--tw-text-opacity))
}
	.content {
    flex-basis: 80%
}
	.body {
    margin-top: 2rem
}
	.username p {
    font-weight: 400
}
	.avatar {
    display: flex;
    flex-direction: row;
    align-items: center
}
	.avatar h2 {
    margin-left: 1rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700
}
	.input {
    visibility: hidden;
    height: 0px;
    width: 0px
}
</style>
