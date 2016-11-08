'use strict';

exports.up = (knex, Promise) => {
	return knex.schema.createTable(`users`, (table) => {
		table.increments();
		table.string(`username`)
			.notNullable()
			.unique();
		table.string(`hashed_pw`);
		table.timestamps(true, true);
	})
}

exports.down = (knex, Promise) => knex.schema.dropTable(`users`)
