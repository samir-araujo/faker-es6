import { Locale } from './../../../types/locale';
import phoneFormat from '../../phoneFormat';
import randomArrayElement from '../../../helpers/randomArrayElement';

jest.mock('../../../helpers/randomArrayElement');

describe('Phone | phoneFormat', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('should return a random phone format', () => {
        (randomArrayElement as jest.Mock).mockImplementation(
            () => /\d{2} \d{4}/
        );

        const format = phoneFormat();

        expect(format).toMatch('## ####');
    });

    it('should accept any valid locale', () => {
        expect(() => phoneFormat(Locale.PT_BR)).not.toThrowError();
    });
});
