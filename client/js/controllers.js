'use strict';

app.controller("redditControl", ['$scope', '$cookies', '$route', 'postsService', 'cookieService', function($scope, $cookies, $route, postsService, cookieService) {

	$scope.view = {};
	$scope.view.formShow = false;
	$scope.view.search = '';
	$scope.view.sortBy = ['votes', 'date', 'author'];
	$scope.order = 'votes';
	$scope.newComment = {};
	$scope.favorites = [];
	$scope.cookies = $cookies.getAll()

	$scope.view.posts = postsService.posts.query({}, (svp) => {
		for (let i = 0; i < svp.length; i++) {
			svp[i].date = moment(svp[i].created_at).calendar();
		}
	})

	$scope.$watch('cookies', function() {
		if ($cookies.getAll().redditSession) {
			$scope.emit('cookiesDetected')
			$scope.userWelcome = cookieService.decodeCookie($cookies.get('redditSession'))
		}
	})

	$scope.$on('cookiesDetected', function() {
		$scope.userWelcome = cookieService.decodeCookie($cookies.get('reddredditSession'))
	})

	$scope.addPost = (post) => {
		console.log(post, "post");
		postsService.posts.save(post, (results) => {
			post.date = moment().calendar();
			post.newCommentVisible = false;
			post.commentsVisible = false;
			post.favorite = false;
			$scope.view.formShow = false;
			$scope.view.newPost.$setPristine()
		})
		$route.reload();
	};

	$scope.addComment = (post, newComment) => {
		if (post === post) {
			newComment.post_id = post.id
			postsService.comments.save(newComment, (results) => {
				post.date = moment().calendar();
			})
		} else {
			console.log("you bummed up");
		};
		$scope.newComment = {};
		$route.reload();
	};

	$scope.deletePost = (post) => {
		if (post === post) {
			postsService.posts.delete({
				id: post.id
			})
			$route.reload();
		}
	}

	$scope.deleteComment = (comment) => {
		if (comment === comment) {
			postsService.comments.delete({
				id: comment.id
			})
			$route.reload();
		}
	}

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
		postsService.posts.update({
			id: post.id
		}, post);
	};

	$scope.commentVote = (comment, flag) => {
		console.log(comment);
		comment.votes += flag;
		postsService.comments.update({
			id: comment.id
		}, comment);
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
}]);
