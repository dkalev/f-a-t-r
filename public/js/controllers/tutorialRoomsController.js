angular.module('tutorialRoomsController', [])

	// inject the TutorialRoom service factory into our controller
	.controller('tutorialRoomsController', ['$scope','$http','TutorialRooms', function($scope, $http, TutorialRooms) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all tutorialRooms and show them
		// use the service to get all the tutorialRooms
		TutorialRooms.get()
			.success(function(data) {
				$scope.tutorialRooms = data;
				$scope.loading = false;
			});
	}]);
