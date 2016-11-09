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

	$scope.view.posts = postsService.posts.query({}, () => {
		$scope.view.posts.comments = [];
		console.log($scope.view.posts);
	});


	$scope.comments = postsService.comments.query({}, () => {
		console.log($scope.comments, "sadfasd");
	});

	const getComments = () => {
		let postArr = $scope.view.posts
		let comArr = postsService.comments.query();
		console.log(comArr, "comArr");
		for (let i = 0; i < postArr.length; i++) {
			console.log(postArr[i], "p arr i");
			postArr[i].comments = [];
			for (let j = 0; j < comArr.length; j++) {
				if (postArr[i].id === comArr[j].post_id) {
					postArr[i].comments.push(comArr[j])
					j++
					console.log(j, "j");
				}
				i++
				console.log(i, "i");
			}
			return pos
			console.log(postArr[i].comment, "postcomment");
		}
		return postArr
		console.log(postArr, "postarr");
	}

	$scope.comments = getComments()

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
		postsService.posts.save(post, (results) => {
			console.log('results', results);
			post.date = moment().calendar();
			post.newCommentVisible = false;
			post.commentsVisible = false;
			post.favorite = false;
			$scope.view.formShow = false;
			$scope.view.newPost.$setPristine()
			console.log(post, "post");
		})
	};

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
