angular.module('mainApp')

	// each function returns a promise object
	.factory('TutorialRooms', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/users');
			}
		}
	}]);
