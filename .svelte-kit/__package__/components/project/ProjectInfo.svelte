<script>
	import Button from '../basic_elements/Button.svelte';
	import Icon from '../basic_elements/Icon.svelte';
	import {createEventDispatcher} from 'svelte';
	import get from 'lodash/get';

	const dispatch = createEventDispatcher();

	export let project = {};
	export let isFetching = false;

	function saveToFavorites() {
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
			<Icon
				name="favorite"
				size="3rem"
				scale="1"
				viewSize={{
					width: 40,
					height: 40
				}}
				class={get(project, 'likeActive', false)
					? 'cursor_pointer fill_primary_purple'
					: 'cursor_pointer fill_dark_grey hover_primary_purple'}
				on:click={saveToFavorites}
			/>
		</div>
		<h2 class="description">{get(project, 'description', '')}</h2>
		<div class="projectTags">
			{#each get(project, 'tags', []) as tag}
				<Button
					label={`# ${tag.toLowerCase()}`}
					class="button--filter"
					size=""
				/>
			{/each}
		</div>
	</div>
{:else}
	<div>
		<div class="loadingBreadcrumb" />
		<div class="loadingHeading" />
	</div>
{/if}

<style>
	.projectInfoHeader {
    font-family: Roboto, sans-serif
}
	.projectInfoHeader h2 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
    line-height: 2rem;
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
	.heading {
    margin-bottom: 0.75rem;
    display: flex;
    -moz-column-gap: 1.5rem;
         column-gap: 1.5rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity))
}
	.description {
    width: 75%
}
	.projectTags {
    display: flex;
    height: 0.75rem;
    -moz-column-gap: 0.75rem;
         column-gap: 0.75rem
}
	.loadingBreadcrumb {
    margin-bottom: 2rem;
    height: 1rem;
    width: 10rem
}
	@keyframes pulse {
    50% {
        opacity: .5
    }
}
	.loadingBreadcrumb {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --tw-bg-opacity: 1;
    background-color: rgb(33 32 41 / var(--tw-bg-opacity))
}
	.loadingHeading {
    margin-bottom: 0.75rem;
    height: 2.25rem;
    width: 12rem
}
	@keyframes pulse {
    50% {
        opacity: .5
    }
}
	.loadingHeading {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --tw-bg-opacity: 1;
    background-color: rgb(33 32 41 / var(--tw-bg-opacity))
}
</style>
