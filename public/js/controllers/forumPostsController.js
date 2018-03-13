angular.module('mainApp')

	.controller('forumPostsController', ['$scope','$http','ForumPosts','$location', function($scope, $http,ForumPosts,$location) {
		
		var url = $location.path().split('/');
		
		$scope.overallPost = [];
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
			
			$scope.search = function() {
				var display_option = [];
				
				for ( var i = 0; i < $scope.overallPost.length; i++ ) {
					if ( $scope.overallPost[i].postType == 'Main' && ($scope.overallPost[i].modCode == $scope.select.module || $scope.select.module == "0") )
						display_option.push($scope.overallPost[i]);
					
					$scope.display = {
						displayOptions : display_option
					}
				}
			}
			
			ForumPosts.get().success(function(data) {
				
				$scope.overallPost = data;
				
				var display_option = [];
				var module_option = [];
				
				for ( var i = 0; i < data.length; i++ ) {
					if ( data[i].postType == 'Main' )
						display_option.push(data[i]);
					if ( module_option.indexOf(data[i].modCode) == -1 && data[i].modCode != "nil" )
						module_option.push(data[i].modCode);
				}
				
				console.log(module_option);
				
				$scope.display = {
					displayOptions : display_option
				}
				$scope.select = {
					moduleOptions : module_option
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