(function() {
	angular
		.module('BlogApp', [])
		.controller('BlogController', BlogController);
		
	function BlogController($scope, $http) {
		$scope.createPost = createPost;
		$scope.deletePost = deletePost;
		
		function init(){
			getPosts();
		}
		init();
		
		function deletePost(postId){
			$http
				.delete("/api/blogpost/" + postId)
				.success(getPosts);
		}
		
		function getPosts(){
			$http
				.get("/api/blogpost")
				.success(function(posts) {
					$scope.posts = posts;
				});
			
		}
		
		function createPost(post) {
			console.log(post);
			$http
			.post('/api/blogpost', post)
			.success(getPosts);
		}
	}
})();