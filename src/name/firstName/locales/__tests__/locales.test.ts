import locales from '..';

describe('Name | firstName | Locales', () => {
    it('has en', () => {
        expect(locales).toHaveProperty('en');
    });

    it('has pt_BR', () => {
        expect(locales).toHaveProperty('pt_BR');
    });

    it('has ja', () => {
        expect(locales).toHaveProperty('ja');
    });
});
