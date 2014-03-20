"use strict";

define(["app", "../models/header-links"], function(app) {
  app.amd.controller("HeaderController", ["$scope", "HeaderLinks", function($scope, HeaderLinks) {
    $scope.appName = "AMD AngularJS Components";
    $scope.links = HeaderLinks;
  }]);
});