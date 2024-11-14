<script>
	import {createEventDispatcher} from 'svelte';
	import Icon from './Icon.svelte';

	export let avatar = '';
	export let canEditAvatar = false;
	export let username = '';

	const dispatch = createEventDispatcher();

	function onClick(event) {
		dispatch('click', event);
	}
</script>

{#if avatar.length > 3}
	<div
		class={['cropAvatar', $$props.class].join(' ')}
		on:click={onClick}
		on:keypress={e => {
			//TODO: need to design how this will work A11y
		}}
		role="button"
		tabindex="0"
	>
		<img alt="avatar" class="avatarImg" src={avatar} />
		{#if canEditAvatar}
			<Icon
				class="cursor_pointer editAvatar"
				name="edit_avatar"
				size="1.5rem"
				on:click={onClick}
			/>
		{/if}
	</div>
{:else}
	<div
		class={['avatarUsername', $$props.class].join(' ')}
		on:click={onClick}
		on:keypress={e => {
			//TODO: need to design how this will work A11y
		}}
		role="button"
		tabindex="0"
	>
		<p>
			{username.charAt(0)}
			{username.charAt(username.length - 1)}
		</p>
		{#if canEditAvatar}
			<Icon
				class="cursor_pointer editAvatar"
				name="edit_avatar"
				size="1.5rem"
				on:click={onClick}
			/>
		{/if}
	</div>
{/if}

<style>
	@keyframes boop {
		0% {
			transform: rotate(0deg);
		}
		20% {
			transform: rotate(-5deg);
		}
		40% {
			transform: rotate(5deg);
		}
		60% {
			transform: rotate(-7deg);
		}
		80% {
			transform: rotate(7deg);
		}
		90% {
			transform: rotate(0deg);
		}
		95% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	.cropAvatar {
		position: relative;
		display: flex;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		--tw-bg-opacity: 1;
		background-color: rgb(23 23 23 / var(--tw-bg-opacity));
}
	@media (min-width: 1024px) {
		.cropAvatar {
				height: 2.75rem;
				width: 2.75rem;
		}
}
	@media (min-width: 2222px) {
		.cropAvatar {
				height: 2.75rem;
				width: 2.75rem;
		}
}
	.cropAvatar:hover {
		animation: 1s boop forwards running;
	}
	.avatarImg {
		height: 100%;
		width: 100%;
		border-radius: 9999px;
		background-color: transparent;
		-o-object-fit: cover;
		   object-fit: cover;
}
	.avatarUsername {
		position: relative;
		display: flex;
		height: 2.75rem;
		width: 2.75rem;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		--tw-bg-opacity: 1;
		background-color: rgb(23 23 23 / var(--tw-bg-opacity));
		font-family: Roboto, sans-serif;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		text-transform: uppercase;
		--tw-text-opacity: 1;
		color: rgb(255 255 255 / var(--tw-text-opacity));
}
	.avatarUsername p {
		cursor: pointer;
}
</style>
