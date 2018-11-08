/* tslint:disable:max-classes-per-file */
/* tslint:disable:no-shadowed-variable */

import { expect } from "chai";
import { json2tree } from "../lib";

import "mocha";

describe("json2tree", () => {
    it("should exist", () => {
        expect(json2tree).to.not.be.an("undefined");
    });
    it("should be a function", () => {
        expect(json2tree).to.be.a("function");
    });
});

describe("json2tree", () => {
    it("should map a string", () => {
        class Mock {
            public static set(path: string, value: any) {
                expect(path).to.eq("root");
                expect(value).to.eq("string");
            }
        }
        json2tree("root", "string", Mock.set);
    });
    it("should map an object", () => {
        class Mock {
            public static set(path: string, value: any) {
                expect(path.startsWith("root")).to.eq(true);
                expect(path.endsWith("/")).to.eq(false);
                switch (path) {
                    case "root/a":
                        throw new Error("root/a");
                    case "root/a/x":
                        expect(value).to.eq(1);
                        break;
                    case "root/b":
                        throw new Error("root/b");
                    case "root/b/y":
                        expect(value).to.eq(true);
                        break;
                    case "root/c":
                        throw new Error("root/c");
                    case "root/c/z":
                        throw new Error("root/c/z");
                }
            }
        }
        json2tree("root", {
            a: {x: 1}, b: {y: true}, c: {z: "z"},
        }, (key: string, value: any) => {
            if (key !== "root/c/z" && value !== "z") {
                Mock.set(key, value);
            } else {
                return false;
            }
        });
    });
});
