import helpers from '..';

describe('Helpers', () => {
    it('has randomNumber module', () => {
        expect(helpers).toHaveProperty('randomNumber');
    });

    it('has randomArrayElement module', () => {
        expect(helpers).toHaveProperty('randomArrayElement');
    });

    it('has randomArrayElements module', () => {
        expect(helpers).toHaveProperty('randomArrayElements');
    });

    it('has getLocale module', () => {
        expect(helpers).toHaveProperty('getLocale');
    });
});
