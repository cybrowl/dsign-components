<script>
	import Button from '../basic_elements/Button.svelte';
	import {DateTime} from 'luxon';
	import {createEventDispatcher} from 'svelte';
	import get from 'lodash/get';

	const dispatch = createEventDispatcher();

	export let snap = {};

	let created = DateTime.fromMillis(
		Number(snap.created) / 1000000
	).toLocaleString(DateTime.DATETIME_MED);

	function saveToFavorites() {
		project.metrics.likes = Number(project.metrics.likes) + 1;

		project.likeActive = true;

		dispatch('saveToFavorites', project);
	}
</script>

<div class="info">
	<span class="breadcrumb">
		<a href={`/${get(snap, 'username', '')}`}>{get(snap, 'username', '')}</a>
		<span>/</span>
		{#if get(snap, 'project.id', '').length > 0}
			<a
				href={`/project/${get(snap, 'project.id', '')}/?canister_id=${get(
					snap,
					'project.canister_id',
					''
				)}`}>{get(snap, 'project.name', '')}</a
			>
			<span>/</span>
		{/if}
		<p>{get(snap, 'title', '')}</p>
	</span>
	<h1>{get(snap, 'title', '')}</h1>
	<div class="details">
		<p><span>Owner: </span>{get(snap, 'username', '')}</p>
		<p><span>Published: </span>{created}</p>
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
