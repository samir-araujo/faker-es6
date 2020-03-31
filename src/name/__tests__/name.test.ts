import name from '..';

describe('Name', () => {
    it('has firstName module', () => {
        expect(name).toHaveProperty('firstName');
    });
});
