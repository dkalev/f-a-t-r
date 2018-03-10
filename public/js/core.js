var app = angular.module('mainApp', [
  'ui.router'
]).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('bookTutorial', {
      url: '/',
	  controller:'tutorialRoomsController',
      templateUrl: 'templates/booking.html'
    });
}]);
