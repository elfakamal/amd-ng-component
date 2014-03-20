"use strict";


define(["app"], function(app) {
  app.amd.factory("HeaderLinks", function() {
    return [
      {name: "Home", link: "/", active: true},
      {name: "About", link: "/about", active: false},
      {name: "Contact", link: "/contact", active: false}
    ];
  })
});