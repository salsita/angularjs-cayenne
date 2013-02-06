app.service('notification', function($rootScope, config) {
    if(!$rootScope.notifications)
        $rootScope.notifications = [];

    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.notifications = [];
    });
    this.success = function(message) {
        $rootScope.notifications.push({
            severity: 'success',
            message: message
        });

        return this;
    };

    this.alert = function(message) {
        $rootScope.notifications.push({
            severity: 'alert',
            message: message
        });

        return this;
    };

    this.error = function(message) {
        $rootScope.notifications.push({
            severity: 'error',
            message: message
        });

        return this;
    };

    this.reset = function() {
        $rootScope.notifications = [];

        return this;
    };
});
