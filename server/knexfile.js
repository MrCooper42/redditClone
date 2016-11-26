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
		connection: process.env.DATABASE_URL,
		migrations: {
			directory: `./migrations`
		}
		seeds: {
			directory: `./seeds`
		}
	}
};
