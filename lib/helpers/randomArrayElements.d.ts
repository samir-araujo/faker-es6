/**
 * Return N random items from given array.
 * If the amount of items requested is greater than collection length,
 * it will return as many items as possible
 *
 * @export
 * @template T
 * @param {T[]} collection
 * @param {number} amount
 * @returns {T[]}
 */
export default function randomArrayElements<T>(collection: T[], amount: number): T[];
