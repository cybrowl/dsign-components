<script>
	import Button from '../basic_elements/Button.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import {createEventDispatcher} from 'svelte';
	import {DateTime} from 'luxon';

	export let snap = {};
	export let project_name = '';
	export let is_owner = false;

	const dispatch = createEventDispatcher();

	$: username = snap.username || '';
	$: snap_name = snap.name || '';
	$: tags = snap.tags || [];
	$: published_date = snap.created
		? DateTime.fromMillis(Number(snap.created) / 1000000).toLocaleString(
				DateTime.DATETIME_MED
		  )
		: '';
	$: project_href = `/project/${project_name}?id=${snap.project_id || ''}&cid=${
		snap.canister_id || ''
	}`;

	function handleClickEdit() {
		dispatch('edit');
	}
</script>

<div class="info">
	<span class="breadcrumb">
		<a href={`/${username}`}>{username}</a>
		<span>/</span>
		{#if project_name.length > 0}
			<a href={project_href}>{project_name}</a>
			<span>/</span>
		{/if}
		<p>{snap_name}</p>
	</span>

	<span class="name">
		<h1>{snap_name}</h1>
		{#if is_owner}
			<Icon
				class="cursor_pointer fill_dark_grey hover_tulip_purple"
				name="edit"
				size="2.5rem"
				on:click={handleClickEdit}
				viewSize={{
					width: '40',
					height: '40'
				}}
			/>
		{/if}
	</span>

	<div class="details">
		<p><span>Creator: </span>{username}</p>
		<p><span>Published: </span>{published_date}</p>
	</div>
	<div class="tags">
		{#each tags as tag}
			<Button
				label={`# ${tag.toLowerCase()}`}
				class="button--filter-active cursor_default"
				size=""
			/>
		{/each}
	</div>
</div>

<style lang="postcss">
	.info {
		@apply font-sans;
	}
	.info h1 {
		@apply text-cloud-purple text-3xl font-bold;
	}
	.details {
		@apply text-white mt-3 mb-6;
	}
	.details span {
		@apply text-mist-grey;
	}
	.breadcrumb {
		@apply text-sm text-white flex mb-9 gap-x-2 cursor-pointer;
	}
	.breadcrumb a {
		@apply text-fog-grey;
	}
	.breadcrumb p {
		@apply text-light-grey cursor-default;
	}
	.name {
		@apply flex flex-row gap-x-6;
	}
	.tags {
		@apply flex gap-x-3 h-3;
	}
</style>
