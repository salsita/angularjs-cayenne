'use strict';

describe('notifications services', function() {
    var rootScope, location, subject, $compile, b;

    var mod = angular.module('notificationsMockups', []);
    mod.controller('mockupController1', function($scope, $rootScope) {
        $scope.$blabla = 1;
        $compile('<notification type="error" on="$blabla == 1">Error1</notification>')($scope);
    });
    mod.controller('mockupController2', function($scope, $rootScope) {
        $scope.$blabla = 2;
    });
    mod.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/mockup1', {templateUrl: 'mockup1.html', controller: 'mockupController1'});
            $routeProvider.when('/mockup2', {templateUrl: 'mockup2.html', controller: 'mockupController2'});
            $routeProvider.otherwise({redirectTo: '/mockup1'});
        }
    ]);

    beforeEach(module('notificationsMockups'));
    beforeEach(module('notifications'));
    beforeEach(inject(function($rootScope, _$compile_, $controller, $location, notifications) {
        location = $location;
        rootScope = $rootScope;
        subject = notifications;
        $compile = _$compile_;

        $controller('mockupController1', {
            $scope: $rootScope.$new()
        });
        /*$controller('mockupController2', {
            $scope: $rootScope.$new()
        });*/

    }));

    it('should clear all notifications after changing URL', function() {
        location.path('/mockup1');
        rootScope.$digest();
        expect(rootScope.notifications.length).toEqual(1);

        rootScope.$emit('$routeChangeStart');
        expect(rootScope.notifications).toEqual([]);
    });
});
