"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getLocale_1 = __importDefault(require("../../helpers/getLocale"));
var locales_1 = __importDefault(require("./locales"));
var randomArrayElement_1 = __importDefault(require("../../helpers/randomArrayElement"));
/**
 * Return a random first name.
 * If a valid locale is given, it will the locale collection.
 * If the given locale is not valid, it will fallback to Locale.EN
 *
 * @export
 * @param {Locale} [selectedLocale]
 * @returns {string}
 */
function firstName(selectedLocale) {
    var collection = getLocale_1.default(locales_1.default, selectedLocale);
    return randomArrayElement_1.default(collection);
}
exports.default = firstName;
