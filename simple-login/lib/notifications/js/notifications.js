(function(ng) {
    "use strict";

    ng.module('notifications', []).
    service('notification', function($rootScope) {
        var mapping = {};

        if(!$rootScope.notifications) {
            $rootScope.notifications = [];
        }

        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.notifications = [];
            mapping = {};
        });

        function addNotification(method) {
            return function(message) {
                var index = mapping[message];

                if(typeof index == 'undefined') {
                    index = $rootScope.notifications.length;
                    mapping[message] = index;

                    $rootScope.notifications[index] = {
                        severity: method,
                        message: message,
                        display: true
                    };
                }

                $rootScope.notifications[index].display = true;
            }
        }

        this.success = addNotification('success');
        this.alert = addNotification('alert');
        this.error = addNotification('error');

        this.hide = function(message) {
            var index = mapping[message];
            if(typeof index == 'undefined') {
                return;
            }

            $rootScope.notifications[index].display = false;
        };

        this.reset = function() {
            $rootScope.notifications = [];
            mapping = {};
        };
    }).
    directive('notification', function(notification) {
      return {
          restrict: 'E',
          link: function(scope, element, attrs) {
            var el = element[0];
            var watchExpr = attrs.on;
            var notificationType = attrs.type;
            var notificationText = el.innerHTML;

            /*
             *
             */
            function watchFunc(newValue, oldValue) {
              console.log(watchExpr, newValue);
              if(newValue) {
                  notification[notificationType](notificationText);
              } else {
                  notification.hide(notificationText);
              }
            }

            // execute
            el.style.display = 'none';
            scope.$watch(watchExpr, watchFunc);
            console.log(watchExpr, scope.$eval(watchExpr));
          }
        };
    }).
    controller('notification', function ($scope, $rootScope) {

        // Keep notification messages aligned with $rootScope
        $rootScope.$watch('notifications', function(newValue) {
            $scope.notifications = newValue;
        }, true);
    });
})(angular);
