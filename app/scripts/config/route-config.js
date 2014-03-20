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
        templateUrl: 'scripts/global/views/about.html'
      })
      .state('Contact', {
        url: '/contact',
        templateUrl: 'scripts/global/views/contact.html'
      })
      .state('Home', {
        url: '/',
        templateUrl: 'scripts/global/views/index.html'
      });
  };

  return ["$stateProvider", "$urlRouterProvider", configFn];
});