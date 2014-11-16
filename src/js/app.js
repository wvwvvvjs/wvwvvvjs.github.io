angular.module('wvwvvvjsApp', ['ngRoute', 'basicBarGraphMod'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/views/home.html'
      })
      .when('/1-basic-bar-graph', {
        templateUrl: 'src/views/viz/1-basic-bar-graph.html'
      });
  }]);