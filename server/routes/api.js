'use strict';

const express = require(`express`);
const router = express.Router();
const knex = require(`../db/knex.js`);
const bcrypt = require(`bcrypt`);
// const auth = require(`./auth`);

// /* GET home page. */

router.get(`/allposts`, (req, res, next) => {
	console.log(req.session.userInfo, "user info");
	knex(`posts`)
		.then((posts) => {
			knex(`comments`)
				.then((comments) => {
					posts.forEach((post) => {
						post.comments = [];
						comments.forEach((comment) => {
							if (comment.post_id == post.id) {
								post.comments.push(comment)
							}
						})
					})
					res.json(posts)
				})
		}).catch((err) => {
			return err
		})
});

router.post(`/allposts`, (req, res, next) => {
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

router.put(`/allposts/:id`, (req, res, next) => {
	if (!req.session.userInfo) {
		console.log("log in to post");
	} else {
		knex(`posts`)
			.where('id', req.body.id)
			.update({
				votes: req.body.votes
			}).then((results) => {
				res.json(results)
			})
	}
})

router.delete(`/allposts/:id`, (req, res, next) => {
	if (!req.session.userInfo) {
		console.log("log in to post");
	} else {
		knex(`posts`)
			.where('id', req.params.id)
			.del().then((results) => {
				res.json(results)
				console.log(results, "results");
			})
	}
})

router.delete(`/comments/:id`, (req, res, next) => {
	if (!req.session.userInfo) {
		console.log("log in to post");
	} else {
		knex(`comments`)
			.where('id', req.params.id)
			.del().then((results) => {
				res.json(results)
				console.log(results, "results");
			})
	}
})

// router.get(`/comments`, (req, res, next) => {
// 	knex(`comments`)
// 		.join(`posts`, `posts.id`,
// 			`comments.post_id`)
// 		.join(`users`, `users.id`, `comments.user_id`)
// 		.then((results) => {
// 			console.log(results, "comment results");
// 			res.json(results)
// 		})
// })
// .select(`comments.id`, `users.username`, `post_id`, `content`)

router.post(`/comments`, (req, res, next) => {
	if (!req.session.userInfo) {} else {
		knex(`comments`)
			.insert({
				user_id: req.session.userInfo.id,
				post_id: req.body.post_id,
				username: req.session.userInfo.username,
				content: req.body.content,
				votes: 1
			})
			.then((results) => {
				res.json(results)
			})
	}
})

router.put(`/comments/:id`, (req, res, next) => {
	if (!req.session.userInfo) {
		console.log("log in to post");
	} else {
		knex(`comments`)
			.where('id', req.body.id)
			.update({
				votes: req.body.votes
			}).then((results) => {
				res.json(results)
			})
	}
})

router.post(`/signup`, (req, res, next) => {
	knex(`users`)
		.where(`username`, req.body.username)
		.then((results) => {
			if (results.length >= 1) {
				console.log("user exists already");
			} else {
				let user = req.body;
				let hash = bcrypt.hashSync(user.password, 12);
				knex(`users`)
					.returning(`*`)
					.insert({
						username: user.username,
						hashed_pw: hash
					})
					.then((results) => {
						let userSesh = results[0];
						delete userSesh.hashed_pw;
						req.session.userInfo = userSesh;
						res.send('user singed up')
						console.log('setting user info', userSesh);
					})
			}
		})
})

router.post(`/login`, (req, res, next) => {
	knex(`users`)
		.where(`username`, req.body.username)
		.then((results) => {
			if (results.length < 1) {
				console.log("no Auth");
			} else {
				let user = req.body;
				let userValid = bcrypt.compareSync(user.password, results[0].hashed_pw)
				if (userValid) {
					let userSesh = results[0]
					delete userSesh.hashed_pw
					req.session.userInfo = userSesh
					res.send('user logged in')
					console.log('user checked out you can pass them to the /private page (also check admin here) also give them a session');
				} else {
					console.log('check username or password');
				}
			}
		})
})

module.exports = router;
