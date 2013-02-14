'use strict';

describe('notifications controllers', function() {
    var notificationScope, mockupScope, $compile, rootScope, controller;

    var mod = angular.module('notificationsMockup', []);
    var mockupCtrl = mod.controller('mockupController', function($scope, $rootScope) {
        $scope.$blabla = 1;
    });

    beforeEach(module('notificationsMockup'));
    beforeEach(module('notifications'));
    beforeEach(inject(function(_$compile_, $rootScope, $controller) {
        rootScope = $rootScope;
        notificationScope = $rootScope.$new();
        mockupScope = $rootScope.$new();

        $controller('notificationController', {
            $scope: notificationScope
        });
        $controller('mockupController', {
            $scope: mockupScope
        });

        $compile = _$compile_;
    }));

    it('should keep $scope.notifications aligned with $rootScope.notifications', function() {
        $compile('<notification type="error" on="$blabla == 1">Error1</notification>')(mockupScope);

        rootScope.$digest();
        expect(mockupScope.notifications.length).toEqual(1);
        expect(mockupScope.notifications).toEqual(rootScope.notifications);
    });

});
