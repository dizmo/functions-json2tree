"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Maps recursively a JSON-like object via a `mapper` function, until the
 * object is completely mapped, or the `mapper` returns `false`.
 *
 * @param root a root level location to map to
 * @param item any object the mapper can map to
 * @param mapper a mapper returning possibly false
 *
 * @returns true upon complete a mapping, otherwise false
 */
function json2tree(root, item, mapper) {
    if (root.endsWith("/")) {
        root = root.slice(0, -1);
    }
    if ((typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" && item !== null) {
        for (var key in item) {
            if (item.hasOwnProperty(key)) {
                if (!json2tree(root + "/" + key, item[key], mapper)) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return mapper(root, item) !== false;
    }
}
exports.json2tree = json2tree;
exports.default = json2tree;
//# sourceMappingURL=index.js.map