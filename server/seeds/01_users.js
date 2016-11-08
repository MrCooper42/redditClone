exports.seed = function(knex, Promise) {
	return knex('users').del()
		.then(() => {
			return knex('users').insert([{
				username: 'freemanjamesh',
				hashed_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W'
			}, {
				username: 'adunbar',
				hashed_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W'
			}, {
				username: 'mayamoo',
				hashed_pw: '$2a$06$j/VnOcRDbua45s6zjghbpubcF1wjU4mwmvtmuGAN28MfV3PtfZp2W'
			}])
		})
};
