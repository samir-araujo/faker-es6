import helpers from '..';

describe('Helpers', () => {
    it('should have randomNumber module', () => {
        expect(helpers).toHaveProperty('randomNumber');
    });

    it('should have randomArrayElement module', () => {
        expect(helpers).toHaveProperty('randomArrayElement');
    });

    it('should have randomArrayElements module', () => {
        expect(helpers).toHaveProperty('randomArrayElements');
    });

    it('should have getLocale module', () => {
        expect(helpers).toHaveProperty('getLocale');
    });

    it('should have parseRegex module', () => {
        expect(helpers).toHaveProperty('parseRegex');
    });
});
