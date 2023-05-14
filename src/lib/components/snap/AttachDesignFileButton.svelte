<script>
	import Icon from '../basic_elements/Icon.svelte';
</script>

<button class="attachDesignFile">
	<span class="container">
		<Icon
			name="attach_design_file"
			clickable={false}
			class="cursor_pointer fill_dark_grey"
			viewSize={{width: '55', height: '55'}}
			size="4rem"
		/>
		<span class="info">
			<h4>Attach Design File</h4>
			<p>Max. file size 25 MB</p>
		</span>
	</span>
</button>

<style lang="postcss">
	.attachDesignFile {
		@apply font-sans text-white bg-black-a h-36 rounded-md hover:bg-dark-grey;
	}

	.container {
		@apply flex flex-row items-center ml-6;
	}

	.info {
		@apply ml-2 text-start gap-x-2;
	}
</style>
