directives.directive('notification', function(notification) {
  return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        var el = element[0];

        var notificationType = attrs.type;
        var notificationText = el.innerHTML;

        el.style.display = 'none';

        scope.$watch(attrs.on, function(newValue) {
            if(newValue) {
                notification[notificationType](notificationText);
            }
        });
      }
    };
});
