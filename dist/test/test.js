"use strict";
/* tslint:disable:max-classes-per-file */
/* tslint:disable:no-shadowed-variable */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var lib_1 = require("../lib");
require("mocha");
describe("json2tree", function () {
    it("should exist", function () {
        chai_1.expect(lib_1.json2tree).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_1.json2tree).to.be.a("function");
    });
});
describe("json2tree", function () {
    it("should map a string", function () {
        var Mock = function () {
            function Mock() {
                _classCallCheck(this, Mock);
            }

            _createClass(Mock, null, [{
                key: "set",
                value: function set(path, value) {
                    chai_1.expect(path).to.eq("root");
                    chai_1.expect(value).to.eq("string");
                }
            }]);

            return Mock;
        }();

        lib_1.json2tree("root", "string", Mock.set);
    });
    it("should map an object", function () {
        var Mock = function () {
            function Mock() {
                _classCallCheck(this, Mock);
            }

            _createClass(Mock, null, [{
                key: "set",
                value: function set(path, value) {
                    chai_1.expect(path.startsWith("root")).to.eq(true);
                    chai_1.expect(path.endsWith("/")).to.eq(false);
                    switch (path) {
                        case "root/a":
                            throw new Error("root/a");
                        case "root/a/x":
                            chai_1.expect(value).to.eq(1);
                            break;
                        case "root/b":
                            throw new Error("root/b");
                        case "root/b/y":
                            chai_1.expect(value).to.eq(true);
                            break;
                        case "root/c":
                            throw new Error("root/c");
                        case "root/c/z":
                            throw new Error("root/c/z");
                    }
                }
            }]);

            return Mock;
        }();

        lib_1.json2tree("root", {
            a: { x: 1 }, b: { y: true }, c: { z: "z" }
        }, function (key, value) {
            if (key !== "root/c/z" && value !== "z") {
                Mock.set(key, value);
            } else {
                return false;
            }
        });
    });
});
//# sourceMappingURL=test.js.map