import locales from '..';

describe('Name | lastName | Locales', () => {
    it('should have en locale', () => {
        expect(locales).toHaveProperty('en');
    });

    it('should have pt_BR locale', () => {
        expect(locales).toHaveProperty('pt_BR');
    });

    it('should have ja locale', () => {
        expect(locales).toHaveProperty('ja');
    });
});
