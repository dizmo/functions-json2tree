import { expect } from "chai";

export class TreeMock {
    public static apply(
        path: string | null, value: any): void | boolean {
        switch (path) {
            case null:
                return undefined;
            case "a":
                expect(value).to.eq("α");
                break;
            case "b":
                expect(value).to.eq("β");
                break;
            case "b/i":
                expect(value).to.eq(0);
                break;
            case "b/j":
                expect(value).to.eq(1);
                break;
            case "b/k":
                expect(value).to.eq(2);
                break;
            case "c":
                expect(value).to.eq("γ");
                break;
            case "c/x":
                expect(value).to.eq("ξ");
                break;
            case "c/x/y":
                expect(value).to.eq("υ");
                break;
            case "c/x/y/z":
                expect(value).to.eq("ζ");
                break;
            default:
                throw new Error(`${path} => ${value}`);
        }
    }
}

export default TreeMock;
