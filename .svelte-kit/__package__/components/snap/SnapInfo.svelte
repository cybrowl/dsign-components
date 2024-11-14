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

<style>
	.info {
    font-family: Roboto, sans-serif
}
	.info h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(235 233 255 / var(--tw-text-opacity))
}
	.details {
    margin-top: 0.75rem;
    margin-bottom: 1.5rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.details span {
    --tw-text-opacity: 1;
    color: rgb(177 176 184 / var(--tw-text-opacity))
}
	.breadcrumb {
    margin-bottom: 2.25rem;
    display: flex;
    cursor: pointer;
    -moz-column-gap: 0.5rem;
         column-gap: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.breadcrumb a {
    --tw-text-opacity: 1;
    color: rgb(155 153 163 / var(--tw-text-opacity))
}
	.breadcrumb p {
    cursor: default;
    --tw-text-opacity: 1;
    color: rgb(226 225 230 / var(--tw-text-opacity))
}
	.name {
    display: flex;
    flex-direction: row;
    -moz-column-gap: 1.5rem;
         column-gap: 1.5rem
}
	.tags {
    display: flex;
    height: 0.75rem;
    -moz-column-gap: 0.75rem;
         column-gap: 0.75rem
}
</style>
