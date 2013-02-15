describe('persist service', function () {
    var scope, subject;

    beforeEach(module('persist'));
    beforeEach(inject(function ($rootScope, persistService) {
        subject = persistService;
        scope = $rootScope.$new();
    }));

    afterEach(function() {
        localStorage.setItem('testingPersist', null);
    });

    describe('Persisting service', function() {
        it('should save data in LocalStorage', function() {
            subject.persist(scope, 'testingPersist');

            scope.$apply(scope.testingPersist = [1,2,3]);

            expect(localStorage.getItem('testingPersist')).toBe('[1,2,3]');
        });

        it('should restore value from LocalStorage', function() {
            localStorage.setItem('testingPersist', '{"key1": "value", "key2": 5}');
            subject.persist(scope, 'testingPersist');

            expect(scope.testingPersist.key1).toBe('value');
            expect(scope.testingPersist.key2).toBe(5);
        });

        it('should restore value once after page loading', function() {
            localStorage.setItem('testingPersist', '{"key1": "value", "key2": 5}');
            subject.persist(scope, 'testingPersist');

            localStorage.setItem('testingPersist', '{"key1": "v", "key2": 6}');
            subject.persist(scope, 'testingPersist');

            expect(scope.testingPersist.key1).toBe('value');
            expect(scope.testingPersist.key2).toBe(5);
        });
    });

});
