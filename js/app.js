 
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