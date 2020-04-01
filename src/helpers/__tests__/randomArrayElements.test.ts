import randomArrayElements from '../randomArrayElements';

describe('Helpers | randomArrayElements', () => {
    it('returns a number of random elements from array', () => {
        const collection = ['foo', 'bar', 'baz'];

        const items = randomArrayElements(collection, 2);

        expect(collection).toEqual(expect.arrayContaining(items));
    });

    it('returns the maximum amount of items possibile in collection when parameter amount exceeds collection length', () => {
        const collection = ['foo', 'bar', 'baz'];

        const items = randomArrayElements(collection, 100);

        expect(items).toHaveLength(3);
    });
});
