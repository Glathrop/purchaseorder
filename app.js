angular.module('purchaseOrder', ['ngMaterial','md.data.table'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('orange')
    .backgroundPalette('grey');
});
