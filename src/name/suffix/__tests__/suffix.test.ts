import { Locale } from '../../../types/locale';
import locales from '../locales';
import suffix from '..';

describe('Name | suffix', () => {
    it(`should return a random suffix in ${Locale.EN} by default`, () => {
        const value = suffix();
        const { en } = locales;

        expect(en).toContain(value);
    });

    it('should return a random suffix from given locale', () => {
        const value = suffix(Locale.PT_BR);
        const { pt_BR } = locales;

        expect(pt_BR).toContain(value);
    });

    it(`should return a random suffix in ${Locale.EN} when given locale is not found`, () => {
        const value = suffix(Locale.RU);
        const { en } = locales;

        expect(en).toContain(value);
    });
});
