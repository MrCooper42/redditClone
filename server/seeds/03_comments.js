'use strict';

exports.seed = (knex, Promise) => {
	return knex('comments').del()
		.then(() => {
			return knex('comments').insert([{
				user_id: 1,
				post_id: 1,
				username: 'freemanjamesh',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: 0
			}, {
				user_id: 2,
				post_id: 2,
				username: 'adunbar',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: 4
			}, {
				user_id: 3,
				post_id: 3,
				username: 'mayamoo',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: 1
			}, {
				user_id: 1,
				post_id: 3,
				username: 'freemanjamesh',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: -3
			}, {
				user_id: 3,
				post_id: 3,
				username: 'mayamoo',
				content: 'Robot 1-X, save my friends! And Zoidberg! You seem malnourished. Are you suffering from intestinal parasites? Alright, let\'s mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew.',
				votes: 6
			}]);
		});
};
