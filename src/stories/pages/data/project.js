import {images_alpha, images_delta} from './images';

export const project_gamma = {
	id: 'project-9880',
	canister_id: 'canister-4132',
	created: 1634451931,
	name: 'Project Gamma',
	description: [],
	username: 'user-571',
	owner: [],
	is_owner: false,
	snaps: [
		{
			id: 'snap-1462',
			project_id: 'project-7473',
			canister_id: 'canister-7379',
			created: 1610443730,
			updated: 1668831166,
			name: 'Sample Snap',
			tags: ['demo', 'example'],
			username: 'user-512',
			owner: [],
			is_owner: true,
			design_file: [],
			image_cover_location: 0,
			images: images_alpha,
			metrics: {
				likes: 44,
				views: 747
			}
		}
	],
	feedback: [],
	metrics: {
		likes: 328,
		views: 1328
	}
};

export const project_delta = {
	id: 'project-9880',
	canister_id: 'canister-4132',
	created: 1634451931,
	name: 'Project Delta',
	description: [],
	username: 'user-571',
	owner: [],
	is_owner: false,
	snaps: [
		{
			id: 'snap-1462',
			project_id: 'project-7473',
			canister_id: 'canister-7379',
			created: 1610443730,
			updated: 1668831166,
			name: 'Sample Snap',
			tags: ['demo', 'example'],
			username: 'user-512',
			owner: [],
			is_owner: true,
			design_file: [],
			image_cover_location: 0,
			images: images_delta,
			metrics: {
				likes: 44,
				views: 747
			}
		},
		{
			id: 'snap-2938',
			project_id: 'project-9880',
			canister_id: 'canister-4144',
			created: 1612443730,
			updated: 1669831166,
			name: 'Snap Example Two',
			tags: ['test', 'sample'],
			username: 'user-513',
			owner: [],
			is_owner: true,
			design_file: [],
			image_cover_location: 1,
			images: images_delta,
			metrics: {
				likes: 60,
				views: 850
			}
		}
	],
	feedback: [
		{
			topics: [
				{
					id: 'topic-2329',
					snap_name: 'Sample Snap',
					name: 'Discussion on Features',
					design_file: [
						{
							id: '5F0EA48189A6EBCDB0CF589A',
							url: 'http://127.0.0.1:8080/file/5F0EA48189A6EBCDB0CF589A?canisterId=a3shf-5eaaa-aaaaa-qaafa-cai',
							created: 1709973936153853000,
							chunks_size: 3,
							canister_id: 'a3shf-5eaaa-aaaaa-qaafa-cai',
							content_size: 4473449,
							content_type: 'application/octet-stream',
							filename: '5mb_components.fig',
							content_encoding: '[Object]'
						}
					],
					messages: [
						{
							created: 1629358779,
							content: 'Message about feedback',
							username: 'user-730'
						}
					]
				},
				{
					id: 'topic-2330',
					snap_name: 'Sample Snap Two Two Two',
					name: 'Discussion on Features',
					design_file: [],
					messages: [
						{
							created: 1629358779,
							content: 'Message about feedback',
							username: 'user-730'
						}
					]
				}
			]
		}
	],
	metrics: {
		likes: 328,
		views: 1328
	}
};
