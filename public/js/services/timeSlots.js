angular.module('mainApp')

	// each function returns a promise object
	.factory('TimeSlots', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/timeslots');
			},
			create : function(timeslotData) {
				console.log(timeslotData);
				return $http.post('/api/timeslot',timeslotData);
			}
		}
	}]);
console.log('timeSlots.js');