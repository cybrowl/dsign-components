<script>
	import Button from '../basic_elements/Button.svelte';
	import {DateTime} from 'luxon';
	import {get} from 'lodash';

	export let snap = {};

	let snap_name = get(snap, 'title', '');
	let username = get(snap, 'username', '');
	let published = DateTime.fromMillis(
		Number(snap.created) / 1000000
	).toLocaleString(DateTime.DATETIME_MED);

	let project_id = get(snap, 'project.id', '');
	let project_name = get(snap, 'project.name', '');
	let project_canister_id = get(snap, 'project.canister_id', '');
	let project_href = `/project/${project_id}/?canister_id=${project_canister_id}`;
</script>

<div class="info">
	<span class="breadcrumb">
		<a href={`/${username}`}>{username}</a>
		<span>/</span>
		{#if project_id.length > 0}
			<a href={project_href}>{project_name}</a>
			<span>/</span>
		{/if}
		<p>{snap_name}</p>
	</span>
	<h1>{snap_name}</h1>
	<div class="details">
		<p><span>Creator: </span>{username}</p>
		<p><span>Published: </span>{published}</p>
	</div>
	<div class="tags">
		{#each get(snap, 'tags', []) as tag}
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
	.tags {
		@apply flex gap-x-3 h-3;
	}
</style>
