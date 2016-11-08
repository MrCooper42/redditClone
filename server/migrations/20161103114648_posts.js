'use strict';

exports.up = (knex, Promise) => {
	return knex.schema.createTable(`posts`, (table) => {
		table.increments();
		table.integer(`user_id`)
			.references(`users.id`)
			.onDelete(`CASCADE`);
		table.string(`username`).notNullable();
		table.string(`title`).notNullable();
		table.string(`content`, 300).notNullable();
		table.string(`image`).notNullable().defaultTo('');
		table.integer(`votes`).notNullable().defaultsTo(0);
		table.timestamps(true, true);
	})
}

exports.down = (knex, Promise) => knex.schema.dropTable(`posts`);
