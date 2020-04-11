import RandExp from 'randexp';

export default function parseRegex(
    regex: RegExp,
    replacements?: { [key: string]: string }
): string {
    let result = new RandExp(regex).gen();

    if (replacements !== undefined) {
        Object.keys(replacements).forEach((key) => {
            const pattern = new RegExp(`:${key}`, 'g');

            result = result.replace(pattern, replacements[key]);
        });
    }

    return result;
}
