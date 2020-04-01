"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var locale_1 = require("../types/locale");
var get_1 = __importDefault(require("lodash/get"));
/**
 * Return selectedLocale from locales collection.
 * If selectedLocale is not found, it will return Locale.EN as fallback.
 * If both are not present, them it will throw an error
 *
 * @export
 * @template T
 * @param {LocaleObject<T>} locales
 * @param {Locale} [selectedLocale=Locale.EN]
 * @returns {T}
 */
function getLocale(locales, selectedLocale) {
    if (selectedLocale === void 0) { selectedLocale = locale_1.Locale.EN; }
    var locale = get_1.default(locales, selectedLocale);
    if (locale === undefined) {
        locale = get_1.default(locales, locale_1.Locale.EN);
    }
    if (locale === undefined) {
        throw new Error("Cannot find locale " + selectedLocale + ", nor default fallback locale " + locale_1.Locale.EN);
    }
    return locale;
}
exports.default = getLocale;
