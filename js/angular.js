 
var app = angular.module('EmailApp', ['ngRoute']);
 
app.config(function ( $routeProvider ) {
   
    /* now we can use the routerProvider */
    $routeProvider
        .when('/inbox', { 
            templateUrl: 'views/inbox.html',
            controller: 'InboxCtrl',
            controlleras: 'inbox'  
        })
        .when('/inbox/email/:id',{
            templateUrl: 'views/email.html',
            controller: 'emailController',
            controlleras: 'email'
        })
        .otherwise({
            redirectTo: '/inbox'
        });
});


 
/**
 * Controller: InboxCtrl
 */
angular.module('EmailApp')
  .controller('InboxCtrl',
    function InboxCtrl ( $scope, InboxFactory ) {
      'use strict';
      $scope.meta = {
        title: "My Inbox"
      };
      InboxFactory.getMessages()
        .success(function(jsonData, statusCode){
            console.log('The request was successful!', statusCode);
            console.dir(jsonData);
            // Now add the Email messages to the controller's scope
            $scope.data = {
              emails: jsonData
            };
        });
    });


  /**
 * Factory: InboxFactory
 */

angular.module('EmailApp')
  .factory('InboxFactory', function InboxFactory ($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.getMessages = function () {
      return $http({ method: 'GET', url: 'json/emails.json' })
        .error( function (data, status, headers, config) {
          console.log('There was an error!', data);
        });
    };

    return exports;
  });
