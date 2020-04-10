import { Locale } from '../../../types/locale';
import locales from '../locales';
import prefix from '..';

describe('Name | prefix', () => {
    it(`should return a random prefix in ${Locale.EN} by default`, () => {
        const value = prefix();
        const { en } = locales;

        expect(en).toContain(value);
    });

    it('should return a random prefix from given locale', () => {
        const value = prefix(Locale.PT_BR);
        const { pt_BR } = locales;

        expect(pt_BR).toContain(value);
    });

    it(`should return a random prefix in ${Locale.EN} when given locale is not found`, () => {
        const value = prefix(Locale.RU);
        const { en } = locales;

        expect(en).toContain(value);
    });
});
