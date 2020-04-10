import { Locale } from '../../types/locale';
import getLocale from '../../helpers/getLocale';
import locales from './locales';
import randomArrayElement from '../../helpers/randomArrayElement';

export default function lastName(selectedLocale?: Locale): string {
    const collection = getLocale(locales, selectedLocale);

    return randomArrayElement(collection);
}
