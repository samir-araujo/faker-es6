import randomNumber from '../randomNumber';

describe('Helpers | randomNumber', () => {
    it('returns a positive random number', () => {
        const number = randomNumber();

        expect(number).toBeGreaterThanOrEqual(0);
    });

    it('returns a random integer number by default', () => {
        const number = randomNumber(1, 2);

        expect(Number.isInteger(number)).toBeTruthy();
    });

    it('returns a random float number', () => {
        const number = randomNumber(1, 2, true);

        expect(!Number.isInteger(number)).toBeTruthy();
    });

    it('returns a random float number between min and max', () => {
        const number = randomNumber(1, 2, true);

        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(2);
    });
});
