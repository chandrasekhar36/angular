var myApp = angular.module('myApp', ['ngRoute','myControllers'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl:'js/partial/search.html', controller: 'SearchController'
  });
}]);
