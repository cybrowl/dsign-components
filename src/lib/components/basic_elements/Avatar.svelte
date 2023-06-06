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

<style lang="postcss">
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
		@apply relative lg:w-11 lg:h-11 3xl:w-11 3xl:h-11 flex items-center justify-center rounded-full bg-neutral-900 cursor-pointer;
	}
	.cropAvatar:hover {
		animation: 1s boop forwards running;
	}
	.avatarImg {
		@apply bg-transparent w-full h-full object-cover rounded-full;
	}
	.avatarUsername {
		@apply relative font-sans font-bold w-11 h-11 flex justify-center items-center rounded-full
		bg-neutral-900 text-xl text-white uppercase cursor-pointer;
	}
	.avatarUsername p {
		@apply cursor-pointer;
	}
</style>
