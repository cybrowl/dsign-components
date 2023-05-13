<script>
	import Icon from './Icon.svelte';
	export let is_visible = false;
	export let hide_delay_sec = 5000;

	let count_down_num = hide_delay_sec / 1000;

	let interval_id = setInterval(() => {
		count_down_num -= 1;
	}, 1000);

	setTimeout(() => {
		clearInterval(interval_id);
		// is_visible = false;
	}, hide_delay_sec);
</script>

{#if is_visible === true}
	<div class="notification">
		<span
			class="notificationClose"
			on:click={() => (is_visible = false)}
			on:keypress={e => {
				//TODO: need to design how this will work A11y
			}}
		>
			<Icon
				class="cursor_pointer fill_white hover_bubble_purple"
				name="close_standard"
				size="1.5rem"
			/>
		</span>
		<span class="content">
			<slot />
		</span>
		<span class="countDown">
			{#each Array(count_down_num) as _}
				<span class="countDownItem" />
			{/each}
		</span>
	</div>
{/if}

<style lang="postcss">
	.notification {
		@apply flex items-center justify-center h-32 w-80 bg-smoky-grey rounded z-50 relative;
	}
	.content {
		@apply text-white text-xl;
	}
	.notificationClose {
		@apply absolute p-2 rounded-t top-0 right-0;
	}
	.countDown {
		@apply absolute bottom-2 left-1/2 transform -translate-x-1/2;
	}
	.countDownItem {
		@apply inline-block h-2 w-2 bg-primary-purple mr-1;
	}
</style>
