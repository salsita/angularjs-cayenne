// Declare app level module which depends on filters, and services
angular.module('simple-login', ['controllers', 'notifications']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/changePassword',    {templateUrl: 'partials/changePassword.html', controller: 'changePasswordController'});
        $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'loginController'});
        $routeProvider.otherwise({redirectTo: '/changePassword'});
    }
]);
