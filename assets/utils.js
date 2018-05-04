/* eslint-disable no-unused-vars */

/**
 * Remove duplicate items from an array
 *
 * For example:
 *   removeDuplicateItems([42, 'foo', 42, 'foo', true, true]);
 * Returns:
 *   [42, "foo", true]
 */
const removeDuplicateItems = arr => [...new Set(arr)];

/**
 * Flatten a multidimensional array
 *
 * For example:
 *   flattenArray([11, [22, 33], [44, [55, 66, [77, [88]], 99]]]);
 * Returns:
 *   [11, 22, 33, 44, 55, 66, 77, 88, 99]
 */
const flattenArray = (arr) => {
  const flattened = [].concat(...arr);

  if (flattened.some(item => Array.isArray(item))) {
    return flattenArray(flattened);
  }

  return flattened;
};
