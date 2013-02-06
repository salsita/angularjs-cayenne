'use strict';


// Declare app level module which depends on filters, and services
angular.module('main', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/index', {templateUrl: 'partials/index.html', controller: 'indexController'});
        $routeProvider.when('/page1', {templateUrl: 'partials/page1.html', controller: 'page1Controller'});
        $routeProvider.when('/page2', {templateUrl: 'partials/page2.html', controller: 'page2Controller'});
        $routeProvider.otherwise({redirectTo: '/index'});
    }
]);
