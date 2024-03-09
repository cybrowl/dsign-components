<script>
	import Icon from '../basic_elements/Icon.svelte';
	import get from 'lodash/get';

	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	export let snap = {};
	export let is_authenticated = false;

	function clickBackHistory(event) {
		dispatch('clickBack', event);
	}

	function clickDownload() {
		const link = document.createElement('a');
		link.href = get(snap, 'design_file[0].url', '');
		link.click();
		link.remove();
	}

	function clickFeedback(event) {
		dispatch('clickFeedback', event);
	}
</script>

<div class="actions_bar_sticky">
	<div class="actions">
		<span class="action_item">
			<Icon
				name="back"
				class="cursor_pointer fill_dark_grey hover_tulip_purple"
				size="3rem"
				on:click={clickBackHistory}
			/>
			<p>Back</p>
		</span>

		{#if get(snap, 'design_file', '').length > 0}
			<span class="action_item">
				<Icon
					name="figma"
					class="cursor_pointer fill_dark_grey hover_tulip_purple"
					viewSize={{
						width: '48',
						height: '48'
					}}
					size="3rem"
					on:click={clickDownload}
				/>
				<p>Download</p>
			</span>
		{/if}

		{#if is_authenticated}
			<span class="action_item">
				<Icon
					name="feedback"
					class="cursor_pointer fill_dark_grey hover_tulip_purple"
					viewSize={{
						width: '52',
						height: '52'
					}}
					size="3rem"
					on:click={clickFeedback}
				/>
				<p>Feedback</p>
			</span>
		{/if}
	</div>
</div>

<style lang="postcss">
	.actions_bar_sticky {
		@apply relative;
	}
	.actions {
		@apply sticky top-10 right-0 text-white font-sans flex flex-col gap-10;
	}
	.action_item {
		@apply flex flex-col items-center gap-2;
	}
</style>
