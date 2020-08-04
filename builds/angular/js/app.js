var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope,$http) {
  $http.get('js/data.json').then((response)=>{
    $scope.artists=response.data
    $scope.artistOrder="name"
  });

});
