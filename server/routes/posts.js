'use strict';

const express = require(`express`);
const router = express.Router();
const knex = require(`../db/knex.js`);

router.get(`/`, (req, res, next) => {
	knex(`posts`)
		.join(`users`, `posts.user_id`, `users.id`)
		.then((results) => res.json(results))
});

router.post(`/`, (req, res, next) => {
	if (!req.session.userInfo) {
		console.log("log in to post");
	} else {
		knex(`posts`)
			.insert({
				username: req.session.userInfo.username,
				user_id: req.session.userInfo.id,
				title: req.body.title,
				content: req.body.content,
				image: req.body.image,
				votes: 1
			}).then((results) => {
				res.json(results)
			})
	}
})

router.get(`/:id`, (req, res, next) => {

})
