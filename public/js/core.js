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
      templateUrl: 'templates/booking_menu.html'
    })
	.state('forumPost', {
		url : '/forumPost',
		controller : 'forumPostsController',
		templateUrl: 'templates/forum_menu.html'
	})
	.state('forumTopic', {
		url : '/forumTopic/:id',
		controller : 'forumPostsController',
		templateUrl : 'templates/forum_topic.html',
		params : {id : null}
	})
	.state('profile', {
		url : '/profile',
		controller : 'usersController',
		templateUrl: 'templates/profile.html'
	});
}]);
