import randomArrayElement from '../randomArrayElement';

describe('Helpers | randomArrayElement', () => {
    it('returns a random element from an array', () => {
        const collection = ['foo', 'bar', 'baz'];
        const item = randomArrayElement(collection);

        expect(collection).toContain(item);
    });
});
