import { Locale, LocaleObject } from '../../types/locale';

import getLocale from '../getLocale';

describe('Helpers | getLocale', () => {
    it('returns requested locale from given locale collection', () => {
        const locales: LocaleObject<string[]> = {
            en: ['en'],
            pt_BR: ['pt_BR'],
        };

        const locale = getLocale(locales, Locale.PT_BR);

        expect(locale).toEqual(['pt_BR']);
    });

    it(`returns ${Locale.EN} locale by default`, () => {
        const locales: LocaleObject<string[]> = {
            en: ['en'],
            pt_BR: ['pt_BR¿'],
        };

        const locale = getLocale(locales);

        expect(locale).toEqual(['en']);
    });

    it(`returns ${Locale.EN} if given locale is invalid`, () => {
        const locales: LocaleObject<string[]> = {
            en: ['en'],
            pt_BR: ['pt_BR¿'],
        };

        const locale = getLocale(locales, Locale.RU);

        expect(locale).toEqual(['en']);
    });

    it(`throws an error if given locale and fallback ${Locale.EN} does not exists`, () => {
        const locales = {};

        expect(() => {
            getLocale(locales, Locale.RU);
        }).toThrowError();
    });
});
