// Update with your config settings.

module.exports = {

	development: {
		client: `pg`,
		connection: `postgres://localhost/reddit`,
		seeds: {
			directory: `./seeds`
		}
	},
	production: {
		client: `pg`,
		connection: process.env.HEROKU_POSTGRESQL_PINK_URL,
		seeds: {
			directory: `./seeds`
		}
	}
};
