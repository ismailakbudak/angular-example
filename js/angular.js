 
var app = angular.module('myApp', ['ngRoute']);
 
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

app.controller('InboxCtrl', function ($scope) {
      $scope.emails = [ {'from': 'ismail', 'to': 'test'  },
                        {'from': 'ismail2', 'to': 'test2'  } ];
 
    });
