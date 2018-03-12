angular.module('mainApp')

	// inject the TutorialRoom service factory into our controller
	.controller('tutorialRoomsController', ['$scope','$http','TutorialRooms', 'TimeSlots', function($scope, $http, TutorialRooms, TimeSlots) {
		$scope.overallTutData = [];
		$scope.overallTimeData = [];
		$scope.loading = true;
		
		// POST ===================================================================
		$scope.createtutorialroom = function() {
			console.log(this.tut);
			TutorialRooms.create(this.tut).success(function(data) {
			});				
		}
		
		$scope.createtimeslot = function() {
			console.log(this.time);
			TimeSlots.create(this.time).success(function(data) {
			});
		}
		
		// onChange Function =======================================================
		$scope.onChange = function() {
			var newData = [];
			
			for ( var i = 0; i < $scope.overallTutData.length; i++ ) {
				if ( $scope.overallTutData[i].date == $scope.select.date )	//	if the data matches
				{
					console.log($scope.overallTutData[i].timeSlots.length);
					for ( var n = 0; n < $scope.overallTutData[i].timeSlots.length; n++ ) // get the dates
						if ( newData.indexOf($scope.overallTutData[i].timeSlots[n].start_time) == -1 )
							newData.push($scope.overallTutData[i].timeSlots[n].start_time);
				}
			}
			
			$scope.select.timeslotOptions = newData
		}
		
		$scope.combination = function() {
			//var combinedData = [this.combinetut.tutorial, this.combinetime.timeslot];
			
			for ( var i = 0; i < $scope.overallTimeData.length; i++ )
				if ( $scope.combinetime.timeslot == $scope.overallTimeData[i]._id ) {
					var combinedData = {
						tutRoom_id : $scope.combinetut.tutorial,
						timeSlot : $scope.overallTimeData[i]
					};
					TutorialRooms.update(combinedData).success(function(data) {
					});
					break;
				}
		}
		
		$scope.submit_table = function() {
			
			var tempData = $scope.overallTutData;
			
			console.log(tempData);
			
			// Check for dates first
			if ( $scope.select.date != 0 ) {
				for ( var i = 0; i < tempData.length; i++ )
					if ( $scope.select.date != tempData[i].date )
						tempData.splice(i,1);
			}
			//	Check for the TutorialRoom
			if ( $scope.select.tr != 0 ) {
				for ( var i = 0; i < tempData.length; i++ )
					if ( $scope.select.tr != tempData[i].roomNumber )
						tempData.splice[i,1];
			}
			//	Check for the TimeSlot
			if ( $scope.select.timeslot != 0 ) {
				for ( var i = 0; i < tempData.length; i++ )
					for ( var n = 0; n < tempData[i].timeSlots.length; n++ )
						if ( $scope.select.timeslot != tempData[i].timeSlots[n].start_time )
							tempData[i].timeSlots.splice(n,1);
			}
			
			
			var tableData = [];
			//var storage = [];
			
			// Display Everything based on timeSlots
			for ( var i = 0; i < tempData.length; i++ ) {
				for ( var n = 0; n < tempData[i].timeSlots.length; n++ ) {
					var storage = [];
					storage.date = tempData[i].date;
					storage.timeslot = tempData[i].timeSlots[n].start_time;
					storage.room = tempData[i].roomNumber;
					storage.vacancy = tempData[i].timeSlots[n].vacancy;
					tableData.push(storage);
				}
			}
			
			$scope.table = {
				tbOptions : tableData
			}				
			//console.log(tableData);
		}
		
		// GET =====================================================================
		TutorialRooms.get().success(function(data) {
			//console.log(data);
			
			var date_option = [];
			var tr_option = [];
			
			for ( var i = 0; i < data.length; i++ ) {
				if ( date_option.indexOf(data[i].date) == -1 )
					date_option.push(data[i].date);
				if ( tr_option.indexOf(data[i].roomNumber) == -1 )
					tr_option.push(data[i].roomNumber);
			}
			
			//$scope.select.date = '0';
			
			$scope.overallTutData = data;
			
			$scope.combinetut = {
				tutorialOptions : data
			}
			//console.log($scope.combine);
			$scope.select = {
				date : '0',
				timeslot : '0',
				tr : '0',
				dateOptions : [
				{'id' : '120318', name: '12 MAR 2018'},
				{'id' : '130318', name: '13 MAR 2018'},
				{'id' : '140318', name: '14 MAR 2018'},
				{'id' : '150318', name: '15 MAR 2018'},
				{'id' : '160318', name: '16 MAR 2018'}
				],
				trOptions : [
					'1',
					'2',
					'3',
					'4',
					'5'
				],
				timeslotOptions : [
					'0830',
					'0930',
					'1030',
					'1130',
					'1230',
					'1330',
					'1430',
					'1530',
					'1630',
					'1730',
					'1830',
				]
			};
		});
		
		TimeSlots.get().success(function(data) {
			$scope.overallTimeData = data;
			$scope.combinetime = {
				timeslotOptions : data
			}
		});
		
		
		
		
		// when landing on the page, get all tutorialRooms and show them
		// use the service to get all the tutorialRooms
		/*TutorialRooms.get()
			.success(function(data) {
				$scope.tutorialRooms = data;
				$scope.loading = false;
			});*/
	}]);
