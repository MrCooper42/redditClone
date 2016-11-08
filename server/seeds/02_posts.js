exports.seed = function(knex, Promise) {
	return knex('posts').del()
		.then(() => {
			return knex('posts').insert([{
				title: 'post1',
				user_id: 1,
				content: 'This is the first post.',
				image: 'https://unsplash.it/174/175',
				votes: 5
			}, {
				title: 'post2',
				user_id: 2,
				content: 'This is the second post.',
				image: 'https://unsplash.it/174/173',
				votes: 9
			}, {
				title: 'post3',
				user_id: 3,
				content: 'This is the third post.',
				image: 'https://unsplash.it/175/173',
				votes: 3,
			}])
		})
};
