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
export function json2tree(
    root: string, item: any, mapper: (key: string, value: any) => any,
): boolean {
    if (root.endsWith("/")) {
        root = root.slice(0, -1);
    }
    if (typeof(item) === "object" && item !== null) {
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                if (!json2tree(`${root}/${key}`, item[key], mapper)) {
                    return false;
                }
            }
        }
        return true;
    } else {
        return mapper(root, item) !== false;
    }
}

export default json2tree;
