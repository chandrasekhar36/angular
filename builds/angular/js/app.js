var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers'
]);

myApp.config(['$routeProvider',function ($routeProvider){
  $routeProvider
  when('/',{
    templateUrl: 'js/patial/search.html'
    controller: 'SearchController'
  });
}]);
