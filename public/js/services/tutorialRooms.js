angular.module('mainApp')

	// each function returns a promise object
	.factory('TutorialRooms', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/tutorialrooms');
			},
			create : function(tutorialroomData) {
				return $http.post('/api/tutorialroom', tutorialroomData);
			},
			
			update : function(combinedData) {
				return $http.put('/api/tutorialroom', combinedData);
			},
		}
	}]);
