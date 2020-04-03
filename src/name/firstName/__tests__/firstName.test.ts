import { Locale } from '../../../types/locale';
import firstName from '..';
import locales from '../locales';

describe('Name | firstName', () => {
    it('returns a random first name', () => {
        const name = firstName();
        const { en } = locales;

        expect(en).toContain(name);
    });

    it('accepts any existing locale', () => {
        const name = firstName(Locale.PT_BR);
        const { pt_BR } = locales;

        expect(pt_BR).toContain(name);
    });
});
