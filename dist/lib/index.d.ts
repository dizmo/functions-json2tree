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
export declare const array2tree: (path: string | null, array: any[], apply: (key: string | null, value: any) => boolean | void, separator?: string) => boolean;
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
export declare const object2tree: (path: string | null, object: any, apply: (key: string | null, value: any) => boolean | void, separator?: string, value_key?: string) => boolean;
export default object2tree;
//# sourceMappingURL=index.d.ts.map