import { Locale } from '../../types/locale';
/**
 * Return a random first name.
 * If a valid locale is given, it will the locale collection.
 * If the given locale is not valid, it will fallback to Locale.EN
 *
 * @export
 * @param {Locale} [selectedLocale]
 * @returns {string}
 */
export default function firstName(selectedLocale?: Locale): string;
