"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var randomNumber_1 = __importDefault(require("./randomNumber"));
/**
 * Return a random element from given array
 *
 * @export
 * @template T
 * @param {T[]} collection
 * @returns {T}
 */
function randomArrayElement(collection) {
    var min = 0;
    var max = collection.length - 1;
    var index = randomNumber_1.default(min, max);
    return collection[index];
}
exports.default = randomArrayElement;
