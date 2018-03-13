angular.module('mainApp')

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
			},
			insertuserbooking : function(data) {
				return $http.put('/api/user', data);
			},
			removebooking : function (data)  { 
				return $http.put('/api/userid', data);
			}
		}
	}]);
