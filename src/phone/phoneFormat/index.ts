import { Locale } from '../../types/locale';
import getLocale from '../../helpers/getLocale';
import locales from './locales';
import parseRegex from '../../helpers/parseRegex';
import randomArrayElement from '../../helpers/randomArrayElement';

export default function phoneFormat(selectedLocale?: Locale): string {
    const collection = getLocale(locales, selectedLocale);
    let format = randomArrayElement<string | RegExp>(collection);

    if (format instanceof RegExp) {
        format = format.source;
        format = format.replace(/\\d/g, '\\b[#]');

        format = new RegExp(format);
        format = parseRegex(format);
    }

    return format;
}
