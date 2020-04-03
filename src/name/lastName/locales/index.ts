import { LocaleObject } from '../../../types/locale';
import en from './en/collection';
import ja from './ja/collection';
import pt_BR from './pt_BR/collection';

const locales: LocaleObject<string[]> = { en, ja, pt_BR };

export default locales;
