'use strict';

describe('notifications directives', function() {
    var scope, $compile, rootScope, controller;

    var mod = angular.module('notificationsMockup', []);
    var mockupCtrl = mod.controller('mockupController', function($scope, $rootScope) {
        $scope.$blabla = 1;
    });

    beforeEach(module('notificationsMockup'));
    beforeEach(module('notifications'));
    beforeEach(inject(function(_$compile_, $rootScope, $controller) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        controller = $controller('mockupController', {
            $scope: scope
        });

        $compile = _$compile_;
    }));

    it('should hide elemenent after processing', function() {
        var el = $compile('<notification type="error" on="$blabla == 1">Error1</notification>')(scope)[0];
        expect(el.style.display).toEqual('none');
    });

    it('should initialize $rootscope.notifications', function() {
        $compile('<notification type="error" on="$blabla == 1">Error1</notification>')(scope);
        rootScope.$digest();

        expect(rootScope.notifications).toBeDefined();
        expect(rootScope.notifications.length > 0).toEqual(true);
    });

    it('should set @display property to true if expression is true', function() {
        $compile('<notification type="error" on="$blabla == 1">Error1</notification>')(scope);
        scope.$blabla = 1;
        
        rootScope.$digest();

        expect(rootScope.notifications[0].display).toEqual(true);
    });


    it('should set @display property to false if expression is false', function() {
        $compile('<notification type="error" on="$blabla == 1">Error1</notification>')(scope);

        rootScope.$digest();

        scope.$blabla = 0;
        scope.$digest();

        expect(rootScope.notifications[0].display).toEqual(false);
    });

    it('should be three notifications of various types in $rootScope', function() {
        $compile('<notification type="error" on="$blabla == 1">Error1</notification>')(scope);
        $compile('<notification type="alert" on="$blabla == 1">Error2</notification>')(scope);
        $compile('<notification type="success" on="$blabla == 1">Error3</notification>')(scope);

        rootScope.$digest();

        expect(rootScope.notifications.length).toEqual(3);
        expect(rootScope.notifications.filter(function(el) {
            return el.severity == 'error'
        }).length).toEqual(1);
        expect(rootScope.notifications.filter(function(el) {
            return el.severity == 'alert'
        }).length).toEqual(1);
        expect(rootScope.notifications.filter(function(el) {
            return el.severity == 'success'
        }).length).toEqual(1);
    });
});
