"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var chai_1 = require("chai");

var TreeMock =
/*#__PURE__*/
function () {
  function TreeMock() {
    _classCallCheck(this, TreeMock);
  }

  _createClass(TreeMock, null, [{
    key: "apply",
    value: function apply(path, value) {
      switch (path) {
        case null:
          return undefined;

        case "a":
          chai_1.expect(value).to.eq("α");
          break;

        case "b":
          chai_1.expect(value).to.eq("β");
          break;

        case "b/i":
          chai_1.expect(value).to.eq(0);
          break;

        case "b/j":
          chai_1.expect(value).to.eq(1);
          break;

        case "b/k":
          chai_1.expect(value).to.eq(2);
          break;

        case "c":
          chai_1.expect(value).to.eq("γ");
          break;

        case "c/x":
          chai_1.expect(value).to.eq("ξ");
          break;

        case "c/x/y":
          chai_1.expect(value).to.eq("υ");
          break;

        case "c/x/y/z":
          chai_1.expect(value).to.eq("ζ");
          break;

        default:
          throw new Error("".concat(path, " => ").concat(value));
      }
    }
  }]);

  return TreeMock;
}();

exports.TreeMock = TreeMock;
exports["default"] = TreeMock;
//# sourceMappingURL=mock.js.map