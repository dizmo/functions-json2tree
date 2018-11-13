"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var lib_1 = require("../lib");
var lib_2 = require("../lib");
var mock_1 = require("./mock");
require("mocha");
describe("array2tree", function () {
    it("should exist", function () {
        chai_1.expect(lib_1.array2tree).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_1.array2tree).to.be.a("function");
    });
});
describe("object2tree", function () {
    it("should exist", function () {
        chai_1.expect(lib_2.object2tree).to.not.be.an("undefined");
    });
    it("should be a function", function () {
        chai_1.expect(lib_2.object2tree).to.be.a("function");
    });
});
describe("array2tree", function () {
    it("should map array to 'a' node of tree", function () {
        var mapped = lib_1.array2tree("a", ["α"], function (key, value) {
            mock_1.TreeMock.apply(key, value);
        });
        chai_1.expect(mapped).to.eq(true);
    });
    it("should map array to 'b' node of tree", function () {
        var mapped = lib_1.array2tree("b", ["β", ["i", [0]], ["j", [1]], ["k", [2]]], function (key, value) {
            mock_1.TreeMock.apply(key, value);
        });
        chai_1.expect(mapped).to.eq(true);
    });
    it("should map array to 'c' node of tree", function () {
        var mapped = lib_1.array2tree("c", ["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]], function (key, value) {
            mock_1.TreeMock.apply(key, value);
        });
        chai_1.expect(mapped).to.eq(true);
    });
    it("should map array to root node of tree", function () {
        var mapped = lib_1.array2tree(null, [undefined, ["a", ["α"]], ["b", ["β", ["i", [0]], ["j", [1]], ["k", [2]]]], ["c", ["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]]]], function (key, value) {
            mock_1.TreeMock.apply(key, value);
        });
        chai_1.expect(mapped).to.eq(true);
    });
});
describe("object2tree", function () {
    it("should map string to 'a' node of tree", function () {
        var mapped = lib_2.object2tree("a", "α", function (key, value) {
            mock_1.TreeMock.apply(key, value);
        });
        chai_1.expect(mapped).to.eq(true);
    });
    it("should map object to 'b' node of tree", function () {
        var mapped = lib_2.object2tree("b", {
            _: "β", i: 0, j: 1, k: 2
        }, function (key, value) {
            mock_1.TreeMock.apply(key, value);
        });
        chai_1.expect(mapped).to.eq(true);
    });
    it("should map object to 'c' node of tree", function () {
        var mapped = lib_2.object2tree("c", {
            _: "γ", x: { _: "ξ", y: { _: "υ", z: "ζ" } }
        }, function (key, value) {
            mock_1.TreeMock.apply(key, value);
        });
        chai_1.expect(mapped).to.eq(true);
    });
    it("should map object to root node of tree", function () {
        var mapped = lib_2.object2tree(null, {
            a: "α",
            b: { _: "β", i: 0, j: 1, k: 2 },
            c: { _: "γ", x: { _: "ξ", y: { _: "υ", z: "ζ" } } }
        }, function (key, value) {
            mock_1.TreeMock.apply(key, value);
        });
        chai_1.expect(mapped).to.eq(true);
    });
});
//# sourceMappingURL=test.js.map