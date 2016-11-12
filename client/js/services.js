'use strict';

app.service('postsService', function($resource) {
	return {
		posts: $resource('/api/allposts/:id', {
			id: '@id'
		}, {
			update: {
				method: `PUT`
			},
		}),
		comments: $resource('/api/comments/:id', {
			id: '@id'
		}, {
			update: {
				method: `PUT`
			}
		}),
		logout: $resource('/api/logout', null, {
		})
	}
});


app.service('authService', function($http, $location) {
	return {
		signup: function(userObj) {
			return $http.post('/api/signup', userObj).then(function(response) {
				$location.path('/')
			})
		},
		login: function(userObj) {
			return $http.post('/api/login', userObj).then(function(response) {
				$location.path('/')
			})
		}
	}
})

app.service('cookieService', function($cookies, $location) {
	return {
		decodeCookie: function(cookie) {
			let base64decoded = atob(cookie)
			let sliceStart = (base64decoded.indexOf('"username":"') + 12)
			let sliceEnd = (base64decoded.indexOf('}}') - 1)
			let username =
				base64decoded.slice(sliceStart, sliceEnd)
			return username
		}
	}
});

app.service('userService', function($http) {
	return {
		getUser: () => $http.get('/api/userinfo').then(function(results) {})
	}
});
