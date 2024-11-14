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
			role="button"
			tabindex="0"
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

<style>
	.notification {
    position: relative;
    z-index: 50;
    display: flex;
    height: 8rem;
    width: 20rem;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    --tw-bg-opacity: 1;
    background-color: rgb(69 67 82 / var(--tw-bg-opacity))
}
	.content {
    font-size: 1.25rem;
    line-height: 1.75rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.notificationClose {
    position: absolute;
    top: 0px;
    right: 0px;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    padding: 0.5rem
}
	.countDown {
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
	.countDownItem {
    margin-right: 0.25rem;
    display: inline-block;
    height: 0.5rem;
    width: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(122 113 222 / var(--tw-bg-opacity))
}
</style>
