// 'use strict';
//
//
// if (process.env.NODE_ENV !== `production`) {
// 	require(`dotenv`).config();
// }
//
// const db = require(`./db/api`);
// const passport = require(`passport`);
// const GoogleStrategy = require(`passport-google-oauth`).OAuth2Strategy;
//
//
// passport.use(new GoogleStrategy({
// 		clientID: process.env.GOOGLE_CLIENT_ID,
// 		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// 		callbackURL: `${process.env.HOST}/auth/google/callback`
// 	},
// 	(accessToken, refreshToken, profile, done) => {
// 		db.getUser(profile.id).then((id) => {
// 			if (id) {
// 				return done(null, profile);
// 			} else {
// 				db.createUser(profile.id, profile.displayName, profile.photos.value).then(function(id) {
// 					return done(null, profile);
// 				});
// 			}
// 		});
// 	}
// ));
//
// passport.serializeUser((user, done) => done(null, user));
//
// passport.deserializeUser((obj, done) => done(null, obj));
//
// module.exports = {
// 	passport: passport
// };
