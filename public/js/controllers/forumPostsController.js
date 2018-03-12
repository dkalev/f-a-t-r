angular.module('mainApp')

	.controller('forumPostsController', ['$scope','$http','ForumPosts','$location', function($scope, $http,ForumPosts,$location) {
		
		var url = $location.path().split('/');
		console.log(url);
		// POST ===================================================================
		
		if ( url[1] == 'forumPost' ) {
			$scope.create = function() {
				this.forum.postedBy = 'Chicken1';
				this.forum.postType = 'Main';
				this.forum.parentid = "";
				ForumPosts.create(this.forum).success(function(data) {
					console.log(data);
				});
			}
			
			ForumPosts.get().success(function(data) {
				
				var display_option = [];
				
				for ( var i = 0; i < data.length; i++ ) {
					if ( data[i].postType == 'Main' )
						display_option.push(data[i]);
				}
				
				console.log(display_option);
				
				$scope.display = {
					displayOptions : display_option
				}

			});
		}
		else if ( url[1] == 'forumTopic' ) {
			ForumPosts.get().success(function(data) {
				
				var display_original;
				var display_reply = [];
				
				for ( var i = 0; i < data.length; i++ ) {
					if ( data[i]._id == url[2] )
						display_original = data[i];
					if ( data[i].parentid == url[2] ) {
						display_reply.push(data[i]);
					}
				}
				
				console.log(display_reply);
				
				$scope.display = {
					displayOriginal : display_original,
					displayReplies : display_reply
				}

			});
			
			
			$scope.create = function() {
				this.forum.postedBy = 'Chicken1';
				this.forum.title = 'nil';
				this.forum.modCode = 'nil';
				this.forum.postType = 'Reply';
				this.forum.parentid = url[2];
				ForumPosts.create(this.forum).success(function(data) {
					console.log(data);
				});
			}
		}
		// onChange Function =======================================================

		
		// GET =====================================================================
		
}]);