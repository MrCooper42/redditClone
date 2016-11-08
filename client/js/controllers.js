'use strict';

app.controller("redditControl", ['$scope', '$cookies', 'postsService', 'cookieService', function($scope, $cookies, postsService, cookieService) {

	$scope.view = {};
	$scope.view.formShow = false;
	$scope.view.search = '';
	$scope.view.sortBy = ['votes', 'date', 'author'];
	$scope.order = 'votes';
	$scope.newComment = {};
	$scope.favorites = [];
	$scope.cookies = $cookies.getAll()

	$scope.$watch('cookies', function() {
		if ($cookies.getAll().redditSession) {
			$scope.emit('cookiesDetected')
			$scope.userWelcome = cookieService.decodeCookie($cookies.get('redditSession'))
		}
	})

	$scope.$on('cookiesDetected', function() {
		$scope.userWelcome = cookieService.decodeCookie($cookies.get('reddredditSession'))
	})

	postsService.getPosts().then(function(results) {
		console.log(results);
		$scope.view.posts = results
		console.log(results, 'getting results');
	})

	$scope.addPost = (post) => {
		postsService.newPost(post).then((results) => {
			console.log('results', results);
			post.date = moment().calendar();
			post.newCommentVisible = false;
			post.commentsVisible = false;
			post.favorite = false;
			$scope.view.formShow = false;
			$scope.view.newPost.$setPristine()
		})
	};

	// post.votes = 0;
	// post.comments = [];
	// $scope.view.posts.push(post);

	$scope.addComment = (post, newComment) => {
		if (post === post) {
			newComment.votes = 0;
			post.comments.push(newComment);
		} else {

		};
		$scope.newComment = {};
	};

	$scope.togglePost = () => {
		$scope.view.formShow = !$scope.view.formShow;
	};

	$scope.toggleComment = (post) => {
		post.commentsVisible = !post.commentsVisible;
	};

	$scope.toggleNewComment = (post) => {
		$scope.view.posts.forEach((diffPost) => {
			if (diffPost === post) {
				post.newCommentVisible = !post.newCommentVisible;
			} else {
				diffPost.newCommentVisible = false;
			}
		})
		$scope.newComment = {};
	};

	$scope.changeVote = (post, flag) => {
		post.votes += flag;
	};

	$scope.commentVote = (comment, flag) => {
		comment.votes += flag;
	};

	$scope.addFavorite = (post) => {
		const index = $scope.favorites.indexOf(post)
		if (post.favorite === true) {
			post.favorite = false;
			$scope.favorites.splice(index, 1);
		} else {
			post.favorite = true;
			$scope.favorites.push(post);;
		};
		console.log($scope.favorites, "favorites");
	};
}]);



app.controller('auth', ['$scope', '$cookies', 'authService', function($scope, $cookies, authService) {
	console.log("auth cont");
	$scope.userObj = {}
	$scope.signup = function(userObj) {
		authService.signup(userObj).then(function(response) {})
	}
	$scope.login = function(userObj) {
		authService.login(userObj).then(function(response) {})
	}
}])
