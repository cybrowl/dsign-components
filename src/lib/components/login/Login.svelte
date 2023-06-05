<script>
	import Avatar from '../basic_elements/Avatar.svelte';
	import Button from '../basic_elements/Button.svelte';
	import Icon from '../basic_elements/Icon.svelte';

	import {get} from 'lodash';

	export let is_authenticated = false;
	export let my_profile = {};
</script>

<span class="login">
	{#if is_authenticated}
		<Avatar
			avatar={get(my_profile, 'avatar', '')}
			username={get(my_profile, 'username', '')}
		/>
		<Icon
			name="settings"
			size="2.75rem"
			class="cursor_pointer fill_dark_grey hover_smoky_grey responsive_icon"
			viewSize={{
				width: '44',
				height: '44'
			}}
		/>
	{:else}
		<Button primary={true} label="Connect" />
	{/if}
</span>

<style lang="postcss">
	.login {
		@apply flex gap-x-3 cursor-pointer;
	}
</style>
