angular.module('mainApp')

	// inject the User service factory into our controller
	.controller('usersController', ['$scope','$http','Users','TimeSlots','$location',function($scope, $http, Users, TimeSlots, $location) {
		var url = $location.path().split('/');
		$scope.curUser = [];
		$scope.overallUser = [];
		$scope.loading = true;

		console.log(url);
		
		
		// GET =====================================================================
		// when landing on the page, get all users and show them
		// use the service to get all the users
		Users.get()
			.success(function(data) {
				$scope.overallUser = data;
				
			});
		
		
		if ( url[1] != "profile" ) {
		//	Custom Register ============================================================
			$scope.register = function() {

				this.user.username = "Chicken3";
				console.log(this.user);
				Users.create(this.user).success(function(data) {
					console.log(data);
				});
			};
			
			$scope.deleteTiming = function(option) {
				
			};

			//	Custom Log In ==============================================================
			$scope.login = function() {

				console.log($scope.users);

				Users.get().success(function(data) {
					$scope.users = data;

					console.log($scope.users);
				});

				console.log($scope.users);
			};
		}
		else {
			
			$scope.deleteTiming = function(option) {
				
				//	user id, {}
				
				console.log(option);
				var dataIn = ['5a9564e1b530771b3046e370',[option.id,option.date,option.timeslot,option.room]];
				//dataIn.push('5a9564e1b530771b3046e370');
				console.log(dataIn);
				
				
			
				Users.removebooking(dataIn).success(function(data) {
					
				});
			}
			
			TimeSlots.get().success(function(data) {
				
				
				var curUser = [];
				var table = [];
				
				for ( var i = 0; i < $scope.overallUser.length; i++ )
					if ( $scope.overallUser[i]._id == '5a9564e1b530771b3046e370' ) { //	match User
						curUser =  $scope.overallUser[i]; break;
					}
				
				for ( var n = 0; n < data.length; n++ ) 
					for ( var k = 0; k < curUser.bookings.length; k++ ) {
						var arr = curUser.bookings[k].split(',');
						if ( data[n]._id == arr[0] ) {
							var storage = [];
							storage.id = data[n]._id;
							storage.date = arr[1];
							storage.timeslot = arr[2];
							storage.room = arr[3];
							table.push(storage);
						}
					}
						
						
			
			$scope.table = {
				tbOptions : table
			}
				
				
				
			});
			
			
		}


		/*// CREATE ==================================================================
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
