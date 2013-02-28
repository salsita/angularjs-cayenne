# angularjs-cayenne

This projects provides several tools for AngularJS:

1. in-page notifications
2. persisting scope variables in localStorage

## Notifications

You're able to show in-page notifications which you can add to page using directives or `notifications` service. 
List of notifications is cleared after page changing. There are three types of notifications:
 
 * success
 * alert
 * error

![Notifications](https://lh5.googleusercontent.com/-PR4hhG4yyYI/US5odDqWfAI/AAAAAAAAAZw/ijEgDTsq_Dc/s720/notifications.png)

### How to use

First of all you should include notifications partial in base HTML document:

     <div ng-include="'<path to cayenne lib>/notifications/partials/notifications.html'"></div>
     
Then you might change CSS if you want. In this case you need to change following CSS classes:
    
 1. .notifications - notifcation area
 2. .notification - notification container
 3. .notification-success, 
    .notification-alert, 
    .notification-error - appearance in accordance with notification type

### Directives

You can describe text and condition when notification should be shown by directives:

    <notification type="{{ notification_type }}" on="{{ notification_trigger_expression }}">{{ notification_text }}</notification>
    
 * notification_type - success, alert or error
 * notification_trigger_expression - any [watchable](http://docs.angularjs.org/api/ng.$rootScope.Scope#$watch) expression
 * notification_text - static text

Notification appears when trigger expression will be true.

Examples:

    <notification type="error" on="form.oldpassword.$error.required">Please fill out the field Old password</notification>
    <notification type="success" on="!form.oldpassword.$error.required">You've typed old password</notification>

### Service

Cayenne provides `notifications` module with `notifications` service with 4 methods:

 * success(message) - show success notification
 * alert(message) - show alert notification
 * error(message) - show error notification
 * reset() - clear all messages

## Persisting scope variable

Persisting means that scope variable will be stored in `localStorage` and after every change the value will be updated.

You might persist scope variable in two ticks:

 * load `persist` module with `persistService`
 * call `persistService($scope, key, prefix)`:
  * $scope {Object} Scope
  * variable {String} Name of variable within $scope
  * prefix {String} Optional: prefix for key in localStorage for not to intefere with the others


Example:
    
    controller('loginController', function($scope, $rootScope, persistService){
      persistService.persist($scope, 'username');
    });








