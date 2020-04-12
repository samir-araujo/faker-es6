import faker from '..';

describe('Faker', () => {
    it('should have helpers module', () => {
        expect(faker).toHaveProperty('helpers');
    });

    it('should have name module', () => {
        expect(faker).toHaveProperty('name');
    });

    it('should have phone module', () => {
        expect(faker).toHaveProperty('phone');
    });
});
