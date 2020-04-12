import phone from '..';

describe('Phone', () => {
    it('should have phoneFormat method', () => {
        expect(phone).toHaveProperty('phoneFormat');
    });
});
