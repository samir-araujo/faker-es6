import { Locale, LocaleObject } from '../types/locale';

import get from 'lodash/get';

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
export default function getLocale<T>(locales: LocaleObject<T>, selectedLocale: Locale = Locale.EN): T {
    let locale: T | undefined = get(locales, selectedLocale);

    if (locale === undefined) {
        locale = get(locales, Locale.EN);
    }

    if (locale === undefined) {
        throw new Error(`Cannot find locale ${selectedLocale}, nor default fallback locale ${Locale.EN}`);
    }

    return locale;
}
