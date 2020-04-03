import { Locale } from '../../../types/locale';
import lastName from '..';
import locales from '../locales';

describe('Name | lastName', () => {
    it('should return a random last name from given locale', () => {
        const name = lastName(Locale.PT_BR);
        const { pt_BR } = locales;

        expect(pt_BR).toContain(name);
    });

    it(`should return a random last name in ${Locale.EN} by default`, () => {
        const name = lastName();
        const { en } = locales;

        expect(en).toContain(name);
    });

    it(`should return a random last name in ${Locale.EN} when given locale is not found`, () => {
        const name = lastName(Locale.RU);
        const { en } = locales;

        expect(en).toContain(name);
    });
});
