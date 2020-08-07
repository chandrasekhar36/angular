var myControllers = angular.module('myControllers', []);


myControllers.controller('SearchController', function MyController($scope,$http) {
  $http.get('js/data.json').then((response)=>{
    $scope.artists=response.data
    $scope.artistOrder="name"
  });
});

myControllers.controller('DetailsController', function MyController($scope,$http,$routeParams) {
  $http.get('js/data.json').then((response)=>{
    $scope.artists=response.data
    $scope.whichItem=$routeParams.itemId;
    if ($scope.whichItem!=0)
    $scope.prev=Number($scope.whichItem) - Number(1);
    else
    $scope.prev=Number($scope.artists.length)-1


    if($scope.whichItem==$scope.artists.length-1)
      $scope.next =Number(0);
    else
    $scope.next=Number($scope.whichItem) + Number(1);


  });
});
