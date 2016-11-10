exports.seed = function(knex, Promise) {
	return knex('posts').del()
		.then(() => {
			return knex('posts').insert([{
				title: 'post1',
				user_id: 1,
				username: 'freemanjamesh',
				content: 'This is the first post.',
				image: 'https://unsplash.it/174/175',
				votes: 5,
				created_at: '2016-11-27 02:15:26 UTC',
				updated_at: '2016-11-27 02:15:26 UTC'
			}, {
				title: 'post2',
				user_id: 2,
				username: 'adunbar',
				content: 'This is the second post.',
				image: 'https://unsplash.it/174/173',
				votes: 9,
				created_at: '2016-04-27 22:15:26 UTC',
				updated_at: '2016-04-27 22:15:26 UTC'
			}, {
				title: 'post3',
				user_id: 3,
				username: 'mayamoo',
				content: 'This is the third post.',
				image: 'https://unsplash.it/175/173',
				votes: 3,
				created_at: '2016-04-27 13:15:26 UTC',
				updated_at: '2016-04-27 13:15:26 UTC'
			}])
		})
};
