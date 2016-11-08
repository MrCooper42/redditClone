'use strict';

exports.up = (knex, Promise) => {
	return knex.schema.createTable(`comments`, (table) => {
		table.increments();
		table.integer(`user_id`)
			.references(`users.id`)
			.onDelete(`CASCADE`);
		table.integer(`post_id`)
			.references(`posts.id`)
			.onDelete(`CASCADE`);
		table.string(`username`).notNullable();
		table.string(`content`).notNullable().defaultsTo('');
		table.timestamps(true, true);
	})
};

exports.down = (knex, Promise) => knex.schema.dropTable(`comments`);
