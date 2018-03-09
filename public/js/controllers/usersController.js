angular.module('mainApp')

	// inject the User service factory into our controller
	.controller('usersController', ['$scope','$http','Users', function($scope, $http, Users) {
		$scope.formData = {};
		$scope.loading = true;


		//	Custom Register ============================================================
		$scope.register = function() {

			this.user.username = "Chicken2";
			console.log(this.user);
			Users.create(this.user).success(function(data) {
				console.log(data);
			});
		};

		//	Custom Log In ==============================================================
		var tst;

		getdata = function() {
			var p = tst;
			console.log($scope.users);
		}

		$scope.login = function() {

			console.log($scope.users);

			Users.get().success(function(data) {
				$scope.users = data;

				console.log($scope.users);
			});

			console.log($scope.users);
		};


		// GET =====================================================================
		// when landing on the page, get all users and show them
		// use the service to get all the users
		/*Users.get()
			.success(function(data) {
				$scope.users = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createUser = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Users.create($scope.formData)

					// if successful creation, call our get function to get all the new users
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.users = data; // assign our new list of users
					});
			}
		};

		// DELETE ==================================================================
		// delete a user after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Users.delete(id)
				// if successful creation, call our get function to get all the new users
				.success(function(data) {
					$scope.loading = false;
					$scope.users = data; // assign our new list of users
				});
		};*/
	}]);
