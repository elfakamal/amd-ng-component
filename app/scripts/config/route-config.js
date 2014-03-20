'use strict';

define([], function() {

  //Setting up route
  var configFn = function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('About', {
        url: '/about',
        templateUrl: 'global/views/about.html'
      })
      .state('Contact', {
        url: '/contact',
        templateUrl: 'global/views/contact.html'
      })
      .state('home', {
        url: '/',
        templateUrl: 'global/views/index.html'
      });
  };

  return ["$stateProvider", "$urlRouterProvider", configFn];
});