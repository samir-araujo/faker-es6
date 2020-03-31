import random from 'lodash/random';

/**
 * Return a random number between min and max values.
 * By default this function returns integers numbers, but can
 * return float if isFloating = true
 *
 * @export
 * @param {number} [min]
 * @param {number} [max]
 * @param {boolean} [isFloating=false]
 * @returns {number}
 */
export default function randomNumber(min?: number, max?: number, isFloating: boolean = false): number {
    if (min === undefined) {
        min = 0;
    }

    if (max === undefined) {
        max = min + 100;
    }

    return random(min, max, isFloating);
}
