"use strict";

define(["angular", "./config/route-config", "./config/location-config", "./global/directives/amd-component"],
function(angular, routeConfig, locationConfig, AMDComponentDirective) {

  var app = angular.module("amd-ng-component", ['ui.router', 'amd-ng-component.system'])
  .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function($controllerProvider, $compileProvider, $filterProvider, $provide)
    {
      app.amd = {
        controller : $controllerProvider.register,
        directive  : $compileProvider.directive,
        filter     : $filterProvider.register,
        factory    : $provide.factory,
        service    : $provide.service
      };
    }
  ])
  .config(routeConfig)
  .config(locationConfig);

  //AMD directive to lazy load components.
  angular.module('amd-ng-component.system', [])
    .directive("amdComponent", AMDComponentDirective);

  return app;
});
