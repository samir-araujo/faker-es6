import randomNumber from './randomNumber';

/**
 * Return a random element from given array
 *
 * @export
 * @template T
 * @param {T[]} collection
 * @returns {T}
 */
export default function randomArrayElement<T>(collection: T[]): T {
    const min = 0;
    const max = collection.length - 1;

    const index = randomNumber(min, max);

    return collection[index];
}
