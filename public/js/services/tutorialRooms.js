angular.module('tutorialRoomService', [])

	// each function returns a promise object
	.factory('Users', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/users');
			}
		}
	}]);
