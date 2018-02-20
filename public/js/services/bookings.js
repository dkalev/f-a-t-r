angular.module('mainApp')

	// each function returns a promise object
	.factory('Bookings', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/bookings');
			},
			create : function(userData) {
				return $http.post('/api/booking', userData);
			},
			delete : function(id) {
				return $http.delete('/api/bookings/' + id);
			}
		}
	}]);
