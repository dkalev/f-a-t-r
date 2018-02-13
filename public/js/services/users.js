angular.module('userService', [])

	// each function returns a promise object
	.factory('Users', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/users');
			},
			create : function(userData) {
				return $http.post('/api/user', userData);
			},
			delete : function(id) {
				return $http.delete('/api/users/' + id);
			}
		}
	}]);
