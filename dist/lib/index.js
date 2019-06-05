"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Maps recursively an array via an `apply` function, until the array
 * is completely mapped, or `apply` returns `false`. The structure of
 * the array should comply to:
 *
 * (1) the item at index `0` should be the *value* for a given node,
 *     which can be `null` for the root node;
 *
 * (2) the items at index `1` or higher should be arrays, representing
 *     sub-nodes (if any);
 *
 * (3) the item at index `0` of these arrays representing sub-nodes,
 *     should be the *name* of the corresponding sub-node;
 *
 * (4) the item at index `1` of these sub-node arrays, should be yet
 *     another array representing the sub-tree under the sub-node.
 *
 * Essentially, the array is a fully recursive structure, except the outer
 * most layer where the name of the node for the given path is dropped.
 *
 * @param path path of a node to map to, where `null` implies root
 * @param object object to be mapped via the `apply` function
 * @param apply function via which the array values are mapped
 * @param separator separator string between path elements
 *
 * @returns true upon a complete mapping, otherwise false
 */

exports.array2tree = function at2(path, array, apply) {
  var separator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";

  if (path !== null && path.startsWith(separator)) {
    path = path.slice(1);
  }

  if (path !== null && path.endsWith(separator)) {
    path = path.slice(0, -1);
  }

  if (array.length > 0) {
    var value = array[0];

    if (false === apply(path, value)) {
      return false;
    }

    for (var i = 1; i < array.length; i++) {
      var node = array[i];

      if (node.length > 1) {
        var name = node[0];
        var tree = node[1];

        if (false === at2("".concat(path || "").concat(separator).concat(name), tree, apply, separator = separator)) {
          return false;
        }
      } else {
        continue;
      }
    }

    return true;
  }

  return false;
};
/**
 * Maps recursively a JSON-like object via an `apply` function, until the
 * object is completely mapped or `apply` returns `false`.
 *
 * @param path path of a node to map to, where `null` implies root
 * @param object object to be mapped via the `apply` function
 * @param apply function via which the object values are mapped
 *
 * @param separator separator string between path elements
 * @param value_key default value key for node values
 *
 * @returns true upon a complete mapping, otherwise false
 */


exports.object2tree = function o2t(path, object, apply) {
  var separator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "/";
  var value_key = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "_";

  if (path !== null && path.startsWith(separator)) {
    path = path.slice(1);
  }

  if (path !== null && path.endsWith(separator)) {
    path = path.slice(0, -1);
  }

  if (object !== null) {
    if (_typeof(object) === "object") {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (key === value_key) {
            if (false === apply(path, object[value_key])) {
              return false;
            }
          } else {
            if (false === o2t("".concat(path || "", "/").concat(key), object[key], apply, separator = separator, value_key = value_key)) {
              return false;
            }
          }
        }
      }

      return true;
    } else {
      return apply(path, object) !== false;
    }
  } else {
    return apply(path, object) !== false;
  }
};

exports["default"] = exports.object2tree;
//# sourceMappingURL=index.js.map