// Declare app level module which depends on filters, and services
angular.module('cayenne', ['controllers', 'directives', 'filters', 'services', 'notifications']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/page1', {templateUrl: 'partials/page1.html', controller: 'page1Controller'});
        $routeProvider.when('/page2', {templateUrl: 'partials/page2.html', controller: 'page2Controller'});
        $routeProvider.otherwise({redirectTo: '/page1'});
    }
]);
