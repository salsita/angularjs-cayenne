(function(ng) {
    "use strict";

    ng.module('notifications', []).
    service('notifications', function($rootScope) {
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
    directive('notification', function(notifications) {
      return {
          restrict: 'E',
          compile: function(element, attrs, transclude) {
            var el = element[0];
            el.style.display = 'none';
            var watchExpr = attrs.on;
            var notificationType = attrs.type;
            var notificationText = el.innerHTML;

            function watchFunc(newValue, oldValue) {
              if(newValue) {
                  notifications[notificationType](notificationText);
              } else {
                  notifications.hide(notificationText);
              }
            }

            return function(scope, element, attrs) {
                // execute
                scope.$watch(watchExpr, watchFunc);
            }
          }
      }
    }).
    controller('notificationController', function ($scope, $rootScope) {

        // Keep notification messages aligned with $rootScope
        $rootScope.$watch('notifications', function(newValue) {
            $scope.notifications = newValue;
        }, true);
    });
})(angular);
