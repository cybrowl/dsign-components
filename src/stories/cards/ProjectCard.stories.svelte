<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProjectCard from '../../lib/components/cards/ProjectCard.svelte';
</script>

<Meta title="Cards/ProjectCard" component={ProjectCard} argTypes={{}} />

<Template let:args>
	<div class="wrapper">
		<div class="projectRow"><ProjectCard {...args} on:click={args.onClick} /></div>
	</div>
</Template>

<Story
	name="Default"
	args={{
		snap: {
			isSelected: false,
			image_cover_location: 0,
			metrics: {
				likes: 456,
				views: 867
			},
			images: [{url: 'https://i.imgur.com/50CnzSg.png'}]
		}
	}}
/>

<Story
	name="Loading"
	args={{
		isLoadingProject: true
	}}
/>

<Story
	name="One Snap"
	args={{
		project: {
			canister_id: 'sgymv-uiaaa-aaaaa-aaaia-cai',
			created: 1665134493953997000,
			id: '7ADSB07VYDAV170CKK1N28ZKX1',
			name: 'poked studio',
			username: 'vi',
			snaps: [
				{
					canister_id: 'v32cj-3iaaa-aaaaa-aaa2a-cai',
					created: 1665134477330988000,
					file_asset: {id: '', url: '', is_public: false, canister_id: ''},
					id: '7ADSAGCJHCQ2H5EVAQ5J7GW6W8',
					image_cover_location: 0,
					images: [
						{
							canister_id: 'vo5te-2aaaa-aaaaa-aaazq-cai',
							id: '7ADSAGCJHC4B7YERW8ER6VZAWH',
							url: 'https://pw247-qiaaa-aaaaj-qaqoa-cai.raw.ic0.app/?index=158'
						}
					],
					metrics: {views: 0, likes: 0},
					project: [],
					tags: [],
					title: 'bot',
					username: 'vi'
				}
			]
		}
	}}
/>

<Story
	name="Explore Page"
	args={{
		hideSnapsCount: true,
		showUsername: true,
		project: {
			canister_id: 'sgymv-uiaaa-aaaaa-aaaia-cai',
			created: 1665134493953997000,
			id: '7ADSB07VYDAV170CKK1N28ZKX1',
			name: 'poked studio',
			username: 'vi',
			snaps: [
				{
					canister_id: 'v32cj-3iaaa-aaaaa-aaa2a-cai',
					created: 1665134477330988000,
					file_asset: {id: '', url: '', is_public: false, canister_id: ''},
					id: '7ADSAGCJHCQ2H5EVAQ5J7GW6W8',
					image_cover_location: 0,
					images: [
						{
							canister_id: 'vo5te-2aaaa-aaaaa-aaazq-cai',
							id: '7ADSAGCJHC4B7YERW8ER6VZAWH',
							url: 'https://pw247-qiaaa-aaaaj-qaqoa-cai.raw.ic0.app/?index=158'
						}
					],
					metrics: {views: 0, likes: 0},
					project: [],
					tags: [],
					title: 'bot',
					username: 'vi'
				}
			]
		}
	}}
/>

<Story
	name="Options Popover"
	args={{
		project: {
			canister_id: 'sgymv-uiaaa-aaaaa-aaaia-cai',
			created: 1665134493953997000,
			id: '7ADSB07VYDAV170CKK1N28ZKX1',
			name: 'poked studio',
			username: 'vi',
			snaps: [
				{
					canister_id: 'v32cj-3iaaa-aaaaa-aaa2a-cai',
					created: 1665134477330988000,
					file_asset: {id: '', url: '', is_public: false, canister_id: ''},
					id: '7ADSAGCJHCQ2H5EVAQ5J7GW6W8',
					image_cover_location: 0,
					images: [
						{
							canister_id: 'vo5te-2aaaa-aaaaa-aaazq-cai',
							id: '7ADSAGCJHC4B7YERW8ER6VZAWH',
							url: 'https://pw247-qiaaa-aaaaj-qaqoa-cai.raw.ic0.app/?index=158'
						}
					],
					metrics: {views: 0, likes: 0},
					project: [],
					tags: [],
					title: 'bot',
					username: 'vi'
				}
			]
		},
		showOptionsPopover: true
	}}
/>

<Story
	name="Options Popover Favorites"
	args={{
		project: {
			canister_id: 'sgymv-uiaaa-aaaaa-aaaia-cai',
			created: 1665134493953997000,
			id: '7ADSB07VYDAV170CKK1N28ZKX1',
			name: 'poked studio',
			username: 'vi',
			snaps: [
				{
					canister_id: 'v32cj-3iaaa-aaaaa-aaa2a-cai',
					created: 1665134477330988000,
					file_asset: {id: '', url: '', is_public: false, canister_id: ''},
					id: '7ADSAGCJHCQ2H5EVAQ5J7GW6W8',
					image_cover_location: 0,
					images: [
						{
							canister_id: 'vo5te-2aaaa-aaaaa-aaazq-cai',
							id: '7ADSAGCJHC4B7YERW8ER6VZAWH',
							url: 'https://pw247-qiaaa-aaaaj-qaqoa-cai.raw.ic0.app/?index=158'
						}
					],
					metrics: {views: 0, likes: 0},
					project: [],
					tags: [],
					title: 'bot',
					username: 'vi'
				}
			]
		},
		hideSnapsCount: true,
		showUsername: true,
		showOptionsPopover: true,
		optionsPopoverHide: {
			rename: true,
			delete: false
		}
	}}
/>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		row-gap: 0.5rem;
		position: relative;
	}
	.projectRow {
		grid-column-start: 2;
		grid-column-end: 12;

		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-row-start: 3;
		grid-row-end: auto;
		margin-left: 1rem /* 16px */;
		margin-right: 1rem /* 16px */;
		column-gap: 2.5rem /* 40px */;
		row-gap: 3rem /* 48px */;
		margin-top: 0.5rem /* 8px */;
		margin-bottom: 4rem /* 64px */;
	}
</style>
