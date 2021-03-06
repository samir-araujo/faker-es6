import name from '..';

describe('Name', () => {
    it('should have firstName module', () => {
        expect(name).toHaveProperty('firstName');
    });

    it('should have lastName module', () => {
        expect(name).toHaveProperty('lastName');
    });

    it('should have prefix module', () => {
        expect(name).toHaveProperty('prefix');
    });

    it('should have suffix module', () => {
        expect(name).toHaveProperty('suffix');
    });
});
