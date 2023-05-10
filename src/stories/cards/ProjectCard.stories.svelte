<script>
	import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
	import ProjectCard from '../../lib/components/cards/ProjectCard.svelte';
</script>

<Meta title="Cards/ProjectCard" component={ProjectCard} argTypes={{}} />

<Template let:args>
	<div class="hidden lg:grid grid-cols-12 gap-y-2 relative">
		<div class="col-start-2 col-end-12 grid grid-cols-4 row-start-3 row-end-auto mx-4 gap-x-10 gap-y-20 mt-2 mb-24">
			<ProjectCard {...args} on:click={args.onClick} />
		</div>
	</div>
</Template>

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
