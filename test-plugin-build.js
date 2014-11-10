"format register";

System.register("test-plugin", ["test-file!plugin"], function($__export) {
  "use strict";
  var __moduleName = "test-plugin";
  var template;
  return {
    setters: [function(m) {
      template = m;
    }],
    execute: function() {
      console.log(template);
    }
  };
});

System.register("test-file!plugin", [], true, function(require, exports, module) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var __filename = "test-file";
  var __dirname = ".";
  module.exports = "templated this is a test file\n";
  global.define = __define;
  return module.exports;
});
