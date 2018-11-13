import { expect } from "chai";
import { array2tree } from "../lib";
import { object2tree } from "../lib";
import { TreeMock } from "./mock";

import "mocha";

describe("array2tree", () => {
    it("should exist", () => {
        expect(array2tree).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(array2tree).to.be.a("function");
    });
});

describe("object2tree", () => {
    it("should exist", () => {
        expect(object2tree).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(object2tree).to.be.a("function");
    });
});

describe("array2tree", () => {
    it("should map array to 'a' node of tree", () => {
        array2tree("a", [
            "α",
        ], (key: string | null, value: any) => {
            TreeMock.apply(key, value);
        });
    });
    it("should map array to 'b' node of tree", () => {
        array2tree("b", [
            "β", ["i", [0]], ["j", [1]], ["k", [2]],
        ], (key: string | null, value: any) => {
            TreeMock.apply(key, value);
        });
    });
    it("should map array to 'c' node of tree", () => {
        array2tree("c", [
            "γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]],
        ], (key: string | null, value: any) => {
            TreeMock.apply(key, value);
        });
    });
    it("should map array to root node of tree", () => {
        array2tree(null, [
            undefined,
            ["a", ["α"]],
            ["b", ["β", ["i", [0]], ["j", [1]], ["k", [2]]]],
            ["c", ["γ", ["x", ["ξ", ["y", ["υ", ["z", ["ζ"]]]]]]]],
        ], (key: string | null, value: any) => {
            TreeMock.apply(key, value);
        });
    });
});

describe("object2tree", () => {
    it("should map string to 'a' node of tree", () => {
        object2tree("a", "α", (key: string | null, value: any) => {
            TreeMock.apply(key, value);
        });
    });
    it("should map object to 'b' node of tree", () => {
        object2tree("b", {
            _: "β", i: 0, j: 1, k: 2,
        }, (key: string | null, value: any) => {
            TreeMock.apply(key, value);
        });
    });
    it("should map object to 'c' node of tree", () => {
        object2tree("c", {
            _: "γ", x: {_: "ξ", y: {_: "υ", z: "ζ"}},
        }, (key: string | null, value: any) => {
            TreeMock.apply(key, value);
        });
    });
    it("should map object to root node of tree", () => {
        object2tree(null, {
            a: "α",
            b: {_: "β", i: 0, j: 1, k: 2},
            c: {_: "γ", x: {_: "ξ", y: {_: "υ", z: "ζ"}}},
        }, (key: string | null, value: any) => {
            TreeMock.apply(key, value);
        });
    });
});
