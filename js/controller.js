angular.module('initial_spi.controllers', [])

.controller('mobileController', function($scope){
	$scope.mobile_message = 'say something foo';
})
.controller('smartphoneController', function($scope){
	$scope.smartphone_message = 'say something bettta';
});