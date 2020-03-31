import faker from '..';

describe('Faker', () => {
    it('has helpers module', () => {
        expect(faker).toHaveProperty('helpers');
    });

    it('has name module', () => {
        expect(faker).toHaveProperty('name');
    });
});
