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
					id: 'topic-2000',
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
							created: 1709973936153853000,
							content: 'Message about feedback',
							username: 'user-730'
						},
						{
							created: 1709974937163853000,
							content: 'Message about feedback',
							username: 'user-300'
						},
						{
							created: 1709983936153853000,
							content: `Elixir can call Rust functions by leveraging the interoperability provided through Native Implemented Functions (NIFs) and Rust's Foreign Function Interface (FFI). 
								This process essentially involves two main steps: exposing Rust functions in a way that they can be called from external code (like Elixir), 
								and then loading these functions into the Elixir application. Here's a more detailed breakdown
								This setup allows Elixir applications to utilize Rust's performance and safety for certain tasks, such as number crunching, data processing, 
								or any operation where raw performance is critical, while still benefiting from Elixir's strengths in handling concurrency, 
								fault tolerance, and distributed computing. The combination can yield highly efficient and scalable applications by 
								leveraging the best of both worlds.
								`,
							username: 'user-400'
						},
						{
							created: 1709983936153853000,
							content: `In a small, cozy town where the streets were lined with blooming flowers and the air always carried the scent of spring, lived a young girl named Mia with her spirited cat, Whiskers. Mia found Whiskers one chilly evening under the porch of her old countryside house, his eyes gleaming with a mix of fear and curiosity. From that day forward, they were inseparable, sharing adventures in the vast fields behind Mia's home and curling up together by the fire during stormy nights.
								Whiskers wasn't just any cat; he had a knack for finding trouble or perhaps, trouble had a knack for finding him. One sunny afternoon, as Mia was tending to her garden, Whiskers dashed into the house, his fur coated in a mysterious, glittering dust. Mia followed him inside, her curiosity piqued. The dust led her to an old, forgotten attic room where a small, enchanted book lay open. As she read the book aloud, the words danced in the air, and the room lit up with a thousand twinkling lights, revealing hidden treasures that sparked endless stories and adventures for the duo.
								Their days were filled with magic and mischief, strengthening the bond between the girl and her cat. Mia learned that the world was full of mysteries just waiting to be discovered, and Whiskers proved to be the best companion one could wish for on such quests. Together, they explored enchanted forests, deciphered ancient riddles, and even sailed the high seas on a ship conjured from the enchanted book. In the heart of adventure, Mia realized that it was the love and friendship she shared with Whiskers that made every moment truly magical.`,
							username: 'user-800'
						},
						{
							created: 1709983936153853000,
							content: `In the heart of a bustling city, where the lights never dimmed and the streets were never quiet, there lived a young girl named Ellie and her cat, Luna. Ellie had rescued Luna from a stormy alley one rainy night, and since then, Luna had become her shadow, following her from room to room with a quiet, comforting presence. Despite the noise and chaos of the city, their small apartment felt like an island of peace, a sanctuary where the two could escape the world.
								Luna was no ordinary cat; she had a keen sense for when Ellie needed her most, appearing with a gentle purr and a soft nudge whenever Ellie felt lost in the sea of her thoughts. It was during one of these moments that Ellie discovered Luna's secret. As Luna jumped onto the windowsill, her silhouette cast a peculiar shadow that seemed to stretch and twist into shapes far too grand for a small city apartment. Following Luna's lead, Ellie pressed her hand against the shadow, and to her astonishment, it gave way to a hidden realm beyond their own.
								This realm was a place of wonder, filled with endless skies and floating islands, a place where imagination ran wild and dreams took flight. Together, Ellie and Luna explored this fantastical world, forging friendships with creatures of light and shadow. Each adventure brought them closer, teaching Ellie that courage and love could unlock worlds beyond her wildest dreams. And as they returned home each night, the city lights seemed a little brighter, a reminder of the magic that lay just beyond the edge of reality, shared between a girl and her cat.`,
							username: 'user-460'
						}
					]
				},
				{
					id: 'topic-3000',
					snap_name: 'Sample Snap Two Two Two',
					name: 'Discussion on Features',
					design_file: [],
					messages: [
						{
							created: 1709973936153853000,
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
