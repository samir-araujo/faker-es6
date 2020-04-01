import { Locale, LocaleObject } from '../types/locale';
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
export default function getLocale<T>(locales: LocaleObject<T>, selectedLocale?: Locale): T;
