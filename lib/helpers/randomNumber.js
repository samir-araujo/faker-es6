"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var random_1 = __importDefault(require("lodash/random"));
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
function randomNumber(min, max, isFloating) {
    if (isFloating === void 0) { isFloating = false; }
    if (min === undefined) {
        min = 0;
    }
    if (max === undefined) {
        max = min + 100;
    }
    return random_1.default(min, max, isFloating);
}
exports.default = randomNumber;
