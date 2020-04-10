import locales from '..';

describe('Name | prefix | Locale', () => {
    it('should have en locale', () => {
        expect(locales).toHaveProperty('en');
    });

    it('should have pt_BR locale', () => {
        expect(locales).toHaveProperty('pt_BR');
    });
});
