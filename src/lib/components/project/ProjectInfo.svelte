<script>
	import Button from '../basic_elements/Button.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import {createEventDispatcher} from 'svelte';
	import get from 'lodash/get';

	const dispatch = createEventDispatcher();

	export let project = {};
	export let isFetching = false;

	function saveToFavorites() {
		project.metrics.likes = Number(project.metrics.likes) + 1;

		project.likeActive = true;

		dispatch('saveToFavorites', project);
	}
</script>

{#if isFetching === false}
	<div class="projectInfoHeader">
		<span class="breadcrumb">
			<a href={`/${get(project, 'username', '')}`}
				>{get(project, 'username', '')}</a
			>
			<span>/</span>
			<p>{get(project, 'name', '')}</p>
		</span>
		<div class="heading">
			<h1>{get(project, 'name', '')}</h1>
			<span
				on:click={saveToFavorites}
				on:keypress={e => {
					//TODO: need to design how this will work A11y
				}}
			>
				<Icon
					name="favorite"
					size="3rem"
					scale="1"
					class={get(project, 'likeActive', false)
						? 'favoriteActive cursor'
						: 'favorite cursor'}
				/>
			</span>
		</div>
		<h2>{get(project, 'description', '')}</h2>
		<div class="projectTags">
			{#each get(project, 'tags', []) as tag}
				<Button label={`# ${tag.toUpperCase()}`} filter={true} size="" />
			{/each}
		</div>
	</div>
{:else}
	<div>
		<div class="loadingBreadcrumb" />
		<div class="loadingHeading" />
	</div>
{/if}

<style lang="postcss">
	.projectInfoHeader {
		@apply font-sans;
	}
	.projectInfoHeader h2 {
		@apply text-mist-grey text-2xl mb-8;
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
	.heading {
		@apply flex gap-x-6 text-4xl font-bold text-white mb-3;
	}
	.projectTags {
		@apply flex gap-x-3;
	}
	.loadingBreadcrumb {
		@apply h-4 w-40 bg-black-a mb-8 animate-pulse;
	}
	.loadingHeading {
		@apply h-9 w-48 bg-black-a mb-3 animate-pulse;
	}
</style>
