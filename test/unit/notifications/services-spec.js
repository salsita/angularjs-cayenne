'use strict';

describe('notifications services', function() {
    var scope, $compile, rootScope;

    beforeEach(inject(function(_$compile_, $rootScope) {
        $compile = _$compile_;
        scope = $rootScope.$new();
        rootScope = $rootScope;
    }));

    it('should extend $rootScope.notifications array', function() {
    });

    it('should remove all elements from $rootScope.notifications array', function() {
    });

    it('should show/hide message', function() {
    });
});
