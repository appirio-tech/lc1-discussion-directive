'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainController', ['$scope', '$state', function($scope, $state){
    $state.go('challenge-view');
  }])
  .controller('ChalleneController', ['$scope', 'DISCUSSION_SERVICE_URL', function($scope, DISCUSSION_SERVICE_URL) {
    // URL of discussion service endpoint
    // this is passed to tc-discussion directive through discussion-url attribute
    $scope.discussionUrl = DISCUSSION_SERVICE_URL;

    // sample challenge object
  	$scope.challenge = {
      id: 1,
      title: 'Wire up Angular Directive to Discussion Service',
      createdAt: '2014-11-06'
    }

  }])
  ;
