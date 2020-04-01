"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shuffle_1 = __importDefault(require("lodash/shuffle"));
var take_1 = __importDefault(require("lodash/take"));
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
function randomArrayElements(collection, amount) {
    var shuffledCollection = shuffle_1.default(collection);
    return take_1.default(shuffledCollection, amount);
}
exports.default = randomArrayElements;
