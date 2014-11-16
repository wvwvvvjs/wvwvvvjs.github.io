angular.module('wvwvvvjsApp', ['ngRoute'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/views/home.html'
      })
      .when('/1', {
        templateUrl: 'src/views/viz/1.html'
      });

    $locationProvider.html5Mode(true);
  }]);