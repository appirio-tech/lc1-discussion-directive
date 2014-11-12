'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [

  'ui.router',
  'lc.services',
  'lc.directives',
  'myApp.controllers'
])

// URL of the discussion service.
// set http://localhost:10010 if the discussion service is running locally, 
// or set http://lc1-discussion-service.herokuapp.com if Appirio heroku deployment is used.
.constant('DISCUSSION_SERVICE_URL', 'http://lc1-discussion-service.herokuapp.com')
.config(['$stateProvider', function($stateProvider){
  $stateProvider
    .state('challenge-view', {
      url: '/',
      controller: 'ChalleneController',
      templateUrl: 'partials/view.html'
    })
    ;
  
}])
;

