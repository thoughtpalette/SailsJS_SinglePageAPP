angular.module('application', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/users/ajax', {controller: AjaxController}).
      when('/admin', {controller: AdminController}).
      when('/', {controller: HomeController}).
      otherwise({redirectTo: '/user'});
}]);