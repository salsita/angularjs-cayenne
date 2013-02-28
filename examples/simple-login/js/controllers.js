'use strict';

/* Controllers */

angular.module('controllers', ['persist']).
controller('changePasswordController', function($scope, $rootScope) {
}).
controller('loginController', function($scope, $rootScope, persistService){
    persistService.persist($scope, 'username');
});
