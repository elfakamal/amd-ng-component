"use strict";

/**
 * Configuring require.
 */
require.config({
  paths: {
    "angular": "../bower_components/angular/angular",
    "angular-ui-router": "../bower_components/angular-ui-router/release/angular-ui-router.min",
    "text": "../bower_components/requirejs-text/text",
    "lodash": "../bower_components/lodash/dist/lodash.underscore.min",
    "app": "./app",
    "services": "./services/"
  },
  shim: {
    "angular": {exports: 'angular'},
    "angular-ui-router": {deps: ['angular']},
    "app": {deps: ['angular']}
  },
  priority: ["angular"]
});

require(["angular", "app", "angular-ui-router"], function(angular, app) {
  angular.element(document).ready(function() {
    //Fixing facebook bug with redirect
    if (window.location.hash === '#_=_')
      window.location.hash = '#!';

    //Then init the app
    angular.bootstrap(document, ["amd-ng-component"]);
  });

  return app;
});