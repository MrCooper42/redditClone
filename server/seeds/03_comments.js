'use strict';

exports.seed = (knex, Promise) => {
	return knex('comments').del()
		.then(() => {
			return knex('comments').insert([{
				user_id: 1,
				post_id: 1,
				username: 'freemanjamesh',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: 0,
				created_at: '2016-04-27 22:15:26 UTC',
				updated_at: '2016-04-27 22:15:26 UTC'
			}, {
				user_id: 2,
				post_id: 2,
				username: 'adunbar',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: 4,
				created_at: '2016-04-27 22:15:26 UTC',
				updated_at: '2016-04-27 22:15:26 UTC'
			}, {
				user_id: 3,
				post_id: 3,
				username: 'mayamoo',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: 1,
				created_at: '2016-04-27 22:15:26 UTC',
				updated_at: '2016-04-27 22:15:26 UTC'
			}, {
				user_id: 1,
				post_id: 3,
				username: 'freemanjamesh',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: -3,
				created_at: '2016-04-27 22:15:26 UTC',
				updated_at: '2016-04-27 22:15:26 UTC'
			}, {
				user_id: 3,
				post_id: 3,
				username: 'mayamoo',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: 6,
				created_at: '2016-04-27 22:15:26 UTC',
				updated_at: '2016-04-27 22:15:26 UTC'
			}]);
		});
};
