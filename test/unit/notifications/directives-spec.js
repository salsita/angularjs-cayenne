'use strict';

describe('notifications directives', function() {
    var scope, $compile, rootScope;

    beforeEach(inject(function(_$compile_, $rootScope) {
        $compile = _$compile_;
        scope = $rootScope.$new();
        rootScope = $rootScope;
    }));

    it('should hide elemenent after processing', function() {
    });

    it('should initialize $rootscope.notifications', function() {
        $compile('<notifaction type="type" on="">Error1</notitication>')(scope);
        rootScope.$digest();
        expect(rootScope.notifications).not.toBe(undefined);
    });

    it('should change @display property if expression is true', function() {
    });


    it('should change @display property if expression is false', function() {
    });
});
