angular.module('purchaseOrder').controller('appCtrl',function($scope, $timeout, $mdSidenav, $log){
$scope.test = "It's working!";


  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };



});
