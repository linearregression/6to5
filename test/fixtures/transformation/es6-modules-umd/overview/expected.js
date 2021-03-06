(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "module", "foo", "foo-bar", "./directory/foo-bar"], factory);
  } else if (typeof exports !== "undefined" && typeof module !== "undefined") {
    factory(exports, module, require("foo"), require("foo-bar"), require("./directory/foo-bar"));
  }
})(function (exports, module, _foo, _fooBar, _directoryFooBar) {
  "use strict";

  var _interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
  };

  var foo = _interopRequire(_foo);

  var foo2 = _foo;
  var bar = _foo.bar;
  var bar2 = _foo.foo;
  exports.test = test;
  var test2 = exports.test2 = 5;

  module.exports = test;
});
