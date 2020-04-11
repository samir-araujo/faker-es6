import parseRegex from '../parseRegex';

describe('Helpers | parseRegex', () => {
    it('should create a random string from a RegEx', () => {
        const result = parseRegex(/\d{1,5}/);

        expect(result).toEqual(expect.stringMatching(/\d{1,5}/));
    });

    it('should create a random string from an array of keys', () => {
        const result = parseRegex(/:suffix :firstName/, {
            firstName: 'foo',
            suffix: 'bar',
        });

        expect(result).toEqual('bar foo');
    });

    it('should create a random string from a combination of RegEx and array of keys', () => {
        const result = parseRegex(/:street - \d{1}/, {
            street: 'foobar',
        });

        expect(result).toEqual(expect.stringMatching(/foobar - \d{1}/));
    });

    it('should create complex string from regex', () => {
        const result = parseRegex(
            /:firstName :lastName, you're invited to our party. Please meet us at :street, \d{2}/,
            {
                firstName: 'William',
                lastName: 'Wallace',
                street: 'nowhere',
            }
        );

        expect(result).toEqual(
            expect.stringMatching(
                /William Wallace, you're invited to our party. Please meet us at nowhere, \d{2}/
            )
        );
    });
});
