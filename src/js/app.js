angular.module('wvwvvvjsApp', ['ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/views/home.html'
      });
  }]);