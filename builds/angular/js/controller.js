var myControllers = angular.module('myControllers', []);


myControllers.controller('SearchController', function MyController($scope,$http) {
  $http.get('js/data.json').then((response)=>{
    $scope.artists=response.data
    $scope.artistOrder="name"
  });
});
