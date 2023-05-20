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
		let files = e.target.files;

		dispatch('avatarChange', files);
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

<style lang="postcss">
	.settings {
		@apply flex flex-row font-sans font-bold text-white ml-6;
		min-width: 540px;
	}
	.nav {
		@apply basis-1/5;
	}
	.nav span {
		@apply flex flex-col items-start;
	}
	.nav button {
		@apply mb-4;
	}
	.nav-selected {
		@apply text-bubble-purple;
	}
	.nav button:nth-child(3) {
		@apply mt-60;
		color: #f0627c;
	}
	.content {
		@apply basis-4/5;
	}
	.body {
		@apply mt-8;
	}
	.username p {
		@apply font-normal;
	}
	.avatar {
		@apply flex flex-row items-center;
	}
	.avatar h2 {
		@apply ml-4 font-bold text-2xl;
	}
	.input {
		@apply invisible w-0 h-0;
	}
</style>
