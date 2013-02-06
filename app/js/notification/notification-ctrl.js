controllers.controller('notification', function ($scope, $rootScope) {

    // Keep notification messages aligned with $rootScope
    $rootScope.$watch('notifications', function(newValue) {
        $scope.notifications = newValue;
    }, true);
});
