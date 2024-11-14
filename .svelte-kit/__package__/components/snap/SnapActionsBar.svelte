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

<style>
	.actions_bar_sticky {
    position: relative
}
	.actions {
    position: sticky;
    top: 2.5rem;
    right: 0px;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    font-family: Roboto, sans-serif;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.action_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem
}
</style>
