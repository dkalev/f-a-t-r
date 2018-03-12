angular.module('mainApp')

	// each function returns a promise object
	.factory('ForumPosts', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/forumposts');
			},
			create : function(forumPostData) {
				console.log(forumPostData);
				return $http.post('/api/forumpost',forumPostData);
			}
		}
	}]);
console.log('forumPosts.js');