angular.module('bookingsController', [])

	// inject the Booking service factory into our controller
	.controller('bookingsController', ['$scope','$http','Bookings', function($scope, $http, Bookings) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all bookings and show them
		// use the service to get all the bookings
		Bookings.get()
			.success(function(data) {
				$scope.bookings = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createBooking = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Bookings.create($scope.formData)

					// if successful creation, call our get function to get all the new bookings
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our booking is ready to enter another
						$scope.bookings = data; // assign our new list of bookings
					});
			}
		};

		// DELETE ==================================================================
		// delete a booking after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Bookings.delete(id)
				// if successful creation, call our get function to get all the new bookings
				.success(function(data) {
					$scope.loading = false;
					$scope.bookings = data; // assign our new list of bookings
				});
		};
	}]);
