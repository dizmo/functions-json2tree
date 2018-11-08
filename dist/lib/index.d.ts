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
export declare function json2tree(root: string, item: any, mapper: (key: string, value: any) => any): boolean;
export default json2tree;
//# sourceMappingURL=index.d.ts.map