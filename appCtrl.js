angular.module('purchaseOrder').controller('appCtrl',function($scope, $timeout, $mdSidenav, $log){
$scope.test = "It's working!";


  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

 $scope.programs = [
   {
     name: 'Credit Dialer',
     description: 'Automate all reference checks'

   },
   {
     name: 'Purchase Ordering',
     description: 'Required for all purchases'

   }
 ];


});
