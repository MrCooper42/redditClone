app.service('postsService', function($http) {
	return {
		getPosts: function() {
			return $http.get('/api/allposts')
				.then(function(response) {
					return response.data
					console.log("getting posts", response.data);
				})
		},
		newPost: function(post) {
			return $http.post('/api/newpost', post).then(function(response) {
				return response.data
			})
		}
	}
})

app.service('authService', function($http, $location) {
	return {
		signup: function(userObj) {
			return $http.post('/api/signup', userObj).then(function(response) {
				console.log(response.data, 'response data');
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
})

app.service('userService', ($http) => {
	return {
		getUser: () => $http.get('/api/userinfo').then((results) => results.data)
	}
})
