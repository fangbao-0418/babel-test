"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(fetchData);

function foo(x) {
  if (x) {
    return String(x);
  }

  return "default string";
}

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2);
  });
});

function fetchData() {
  var r1;
  return _regenerator["default"].wrap(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return p;

        case 2:
          r1 = _context.sent;
          console.log(r1);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

(function () {
  var set = new Set();
  var map = new Map();
})();