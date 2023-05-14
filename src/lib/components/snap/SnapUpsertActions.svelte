<script>
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();

	import get from 'lodash/get';

	import Input from '../snap/Input.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import AttachDesignFileButton from './AttachDesignFileButton.svelte';

	let value;
	let placeholder = 'Add a name to your snap';
	let snap = {};

	function handleAttachDesignClick(event) {
		let file = event.detail;

		dispatch('onAttachDesignClick', file);
	}
</script>

<div class="actions">
	<Input {value} {placeholder} />

	<div class="category">
		<Icon name="upload_category" class="fill_none cursor_default" />
		<h3>Upload</h3>
	</div>

	<AttachDesignFileButton on:click={handleAttachDesignClick} />

	<div class="category">
		<Icon name="organize_category" class="fill_white cursor_default" />
		<h3>Organize</h3>
	</div>

	<div class="category">
		<Icon
			name="add_tags"
			class="fill_none cursor_default"
			viewSize={{width: '31.5', height: '24'}}
		/>
		<h3>Add Tags</h3>
	</div>
</div>

<style lang="postcss">
	.actions {
		@apply flex flex-col gap-y-6 font-sans font-bold;
	}
	.category {
		@apply flex flex-row text-white items-center gap-x-2 cursor-default;
	}
</style>
