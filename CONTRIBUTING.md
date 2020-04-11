# Contribution Guide

## Table of contents

<!-- toc -->

-   [Definitions](#definitions)
    -   [What is a `module`?](#what-is-a-module)
    -   [What is a module `method`?](#what-is-a-module-method)
    -   [What is a `locale`?](#what-is-a-locale)
    -   [What is a `helper`?](#what-is-a-helper)
-   [Bug Reports](#bug-reports)
-   [Feature Requests](#feature-requests)
    -   [What you **MUST** test](#what-you-must-test)
    -   [How to add a new module](#how-to-add-a-new-module)
    -   [How to add a new method to an existing module](#how-to-add-a-new-method-to-an-existing-module)
    -   [How to change a existing module](#how-to-change-a-existing-module)
    -   [How to generate random data based on another method(s)](#how-to-generate-random-data-based-on-another-methods)
        -   [Generating a random phone number from a regex](#generating-a-random-phone-number-from-a-regex)
        -   [Generating a random string from a RegEx with replacements](#generating-a-random-string-from-a-regex-with-replacements)
    -   [How to open a PR](#how-to-open-a-pr)
-   [Coding Style](#coding-style)
-   [Naming Convention](#naming-convention-and-other-conventions)
    -   [`Folders`](#folders)
    -   [`Modules`](#modules)
    -   [`Methods`](#methods)
    -   [`Locales`](#locales)
    -   [`Helpers`](#helpers)
    -   [`Tests`](#tests)
-   [Code of Conduct](#code-of-conduct)
-   [Compiled Assets](#compiled-assets)

<!-- tocstop -->

## Definitions

To avoid confusion when reading the docs, bellow there are some common terms and their definitions:

### What is a `module`?

-   Each `module` represents a collection of related methods to generate data
-   `Modules` can contain any amount of methods inside it
-   `Modules` **MUST** only be a collection of its own functions, so no code should exists within it besides the expected `export` / `import`
-   An example of `module` can be found in `src/name/index.ts`

#### Example code:

```ts
// src/myModuleName/index.ts

import myMethod from './myMethod';
import anotherMethod from './anotherMethod';

export default { anotherMethod, myMethod };
```

## What is a module `method`?

-   Each `method` represents a specific data generation function
-   `Methods` **MUST** always be functions to allow tree-shaking
-   `Methods` **MUST** always export a single function, but can export another support `interfaces`, `types` and etc
-   `Methods` **MUST** always use the `getLocale` helper in order to determine the locale
-   `Methods` **CAN** receive a valid locale string. You can use `src/types/locale.ts {Locale}` to type this parameter

### Commented example code:

> :warning: **The code bellow has comments to make it easier to understand, but may not work with all the comments**

```ts
// src/name/firstName/index.ts

// This is the locale interface
import { Locale } from '../../types/locale';

// Helper responsible for determining which locale to use
import getLocale from '../../helpers/getLocale';

// Your module locale collection
import locales from './locales';

// Helper to get a random element from a given array
import randomArrayElement from '../../helpers/randomArrayElement';

/**
 * Return a random first name.
 * If a valid locale is given, it will the locale collection.
 * If the given locale is not valid, it will fallback to Locale.EN
 *
 * @export
 * @param {Locale} [selectedLocale]
 * @returns {string}
 */
export default function firstName(selectedLocale?: Locale): string {
    // Use `getLocale` to determine the right locale data collection
    const collection = getLocale(locales, selectedLocale);

    // Return a random element from collection
    return randomArrayElement(collection);
}
```

## What is a `locale`?

-   A `locale` is a simple array of all the possible results for a module method in a specific language
-   Methods will always fallback to `en` when the given `locale` is not found. So for multi locale methods, you **MUST** always have `en` set
-   A `locale` **MUST** be placed inside a collection of `locales`. This way any method can determine which `locale` it wants to use

### Example locale

```ts
// src/name/firstName/locales/en/collection.ts

const collection: string[] = [
    'Aaliyah',
    'Aaron',
    'Abagail',
    'Abbey',
    'Abbie',
    'Abbigail',
];

export default collection;
```

### Example locale object

> :warning: **The code bellow has comments to make it easier to understand, but may not work with all the comments**

```ts
// src/name/firstName/locales/index.ts

import { LocaleObject } from '../../../types/locale';

// Import each given locale
import en from './en/collection';
import ja from './ja/collection';
import pt_BR from './pt_BR/collection';

// Put them together in an object
const locales: LocaleObject<string[]> = { en, ja, pt_BR };

// Export it
export default locales;
```

## What is a `helper`?

-   `Helpers` are functions meant to be reused within other methods to avoid repetitive tasks
-   `Helpers` are supposed to do only one thing and thing only

### Commented example code:

> :warning: **The code bellow has comments to make it easier to understand, but may not work with all the comments**

```ts
// src/helpers/randomArrayElement.ts

// May import other helpers
import randomNumber from './randomNumber';

/**
 * Return a random element from given array
 *
 * @export
 * @template T
 * @param {T[]} collection
 * @returns {T}
 */
export default function randomArrayElement<T>(collection: T[]): T {
    const min = 0;
    const max = collection.length - 1;

    const index = randomNumber(min, max);

    return collection[index];
}
```

## Bug Reports

We strongly encourage pull requests, but please do not be afraid to send bug requests as well in the form of issues.

If you want a faster response to your problem, it's usually better to open a issue with a **failing test**. This way it's easier to explain what its not working

## Feature Requests

### What you **MUST** test

-   Everything you code, must be covered by tested. Check the coverage to validate if all your code is tested
-   Third party libraries **DOES NOT** have to be tested. If possible, just consider that they will work, otherwise mock them

### How to add a new module

> :grey_exclamation: A good starting point is the `name` module in `src/name/*`

To create a new `module` one should:

-   Create module main file in `src/myModuleName/index.ts`
-   Add `module` to be loaded in `src/index.ts`
-   Add methods to `module`

**Expected tests are:**

-   `src/__tests__/faker.test.ts`
-   `src/myModuleName/__tests__/myModuleName.test.ts`

### How to add a new method to an existing module

> :grey_exclamation: A good starting point is the `name` module in `src/name/*`

To create a new `method` one should:

-   Create method main file in `src/myModuleName/myMethodName/index.ts`
-   Add `method` to be loaded in module at `src/myModuleName/index.ts`
-   Add locales to `method`

**Expected tests are:**

-   `src/myModuleName/__tests__/myModuleName.test.ts`
-   `src/myModuleName/myMethodName/__tests__/myMethodName.test.ts`

### How to add locales to an existing module

> :grey_exclamation: A good starting point is the `name` module in `src/name/*`

To add locales to a `method` one should:

-   Create `locale` entry point in `src/myModuleName/myMethodName/locales/index.ts`
-   Create specific `locale` in `src/myModuleName/myMethodName/locales/myValidLocale/collection.ts`
-   Register specific `locale` in entry point at `src/myModuleName/myMethodName/locales/index.ts`

**Expected tests are:**

-   `src/myModuleName/myMethodName/__tests__/myMethodName.test.ts`
-   `src/myModuleName/myMethodName/locales/__tests__/locales.test.ts`

### How to generate random data based on another method(s)

Faker ES6 has a special helper named `parseRegex` which can generate data from a valid RegEx and also accepts replacements.

This allows for modules/methods to use other functions to create new meaninful data.

Here are a few examples:

### Generating a random phone number from a RegEx

```ts
// src/myModule/myMethod/index.ts

import parseRegex from '../../helpers/parseRegex';

// Renders: 23 81834-9138
const randomPhone = parseRegex(/\d{2} \d{5}-\d{4}/);
```

### Generating a random string from a RegEx with replacements

```ts
// src/myModule/myMethod/index.ts

import parseRegex from '../../helpers/parseRegex';
import firstName from '../../name/firstName';

const data = {
    namePlaceholder: firstName(),
};

// Renders: Maria 18
const randomPhone = parseRegex(/:namePlaceholder \d{2}/);
```

### How to open a PR

> :exclamation: PR should be opened to solve issues. So before submitting your PR, check if there is a issue open about it already or open a new issue

This project uses [git-cz](https://github.com/commitizen/cz-cli) to make standard commits, so a lot of useful information is expected to already exists in your commits.

Still, when opening a PR its nice to always make a few things clear:

-   Which issue(s) it solves
-   Do you have any doubt about a specific part of what you coded? Tell it in the PR so other people can help you out
-   Make a small summary of what and how you solve the issue with your PR

## Coding Style

To avoid further discussions about how many spaces to use or if it should be `space` or `tab`, recurring questions regarding this matter will be **SET IN STONE** bellow:

-   Space or Tab? **SPACE**
-   How many spaces? **4 SPACES**
-   Prefer double or single quote? **SINGLE QUOTE**
-   Use or not template literals? **USE WHEREVER IT MAKES SENSE**
-   Trailing commas for ES5? **YES**

Please, always focus on the quality of your code, not petty discussions.

Also, please **ALWAYS** use Prettier (there is a .prettierrc file in the root with general rules) to automatically format your code.

## Naming Convention and Other Conventions

In order to maintain a consistent code base, there are a few rules to be followed when naming your files

### Folders

`Folders` **MUST** always be written in `camelCase`.

Examples:

-   MyModuleName - ⛔ **BAD**
-   myModuleName - 🎉 **GOOD**

### Modules

> :grey_exclamation: A good starting point is the `name` module in `src/name/index.ts`

-   `Modules` **MUST** always be written in `camelCase`
-   `Modules` **MUST** always have an `index.ts` file
-   `index.ts` **MUST** only work as a wrapper for the methods that it will export

Examples:

-   src/myModuleName/myModule.ts - ⛔ **BAD**
-   src/myModuleName/index.ts - 🎉 **GOOD**

### Methods

> :grey_exclamation: A good starting point is the `name` module in `src/name/firstName/index.ts`

-   `Methods` **MUST** always be written in `camelCase`
-   `Methods` **MUST** always have an `index.ts` file
-   `Methods` **MUST** always be written as function to allow tree shake

Examples:

-   src/myModuleName/myMethod/myMethod.ts - ⛔ **BAD**
-   src/myModuleName/myMethod/index.ts - 🎉 **GOOD**

### Locales

> :grey_exclamation: A good starting point is the `name` module in `src/name/firstName/locales/*`

-   `Locales` **MUST** always be written in `camelCase`
-   `Locales` folders **MUST** be a valid locale name
-   Specific `locales` folders **MUST** always only have a `collection.ts` file
-   Specific `locales` **MUST** always be a simple array

Examples:

-   src/myModuleName/myMethod/locales/locales.ts - ⛔ **BAD**
-   src/myModuleName/myMethod/locales/index.ts - 🎉 **GOOD**
-   src/myModuleName/myMethod/locales/en.ts - ⛔ **BAD**
-   src/myModuleName/myMethod/locales/en/collection.ts - 🎉 **GOOD**

### Helpers

> :grey_exclamation: A good starting point is the `randomArrayElement` module in `src/helpers/randomArrayElement`

Because `helpers` are meant to be simple functions, they **MUST** not have a folder with their names inside `helpers`, but **MUST** be a single file.

-   `Helpers` **MUST** always be written in `camelCase`
-   `Helpers` **MUST** always be a single file
-   If you need to split the `helper` function, consider creating another `helper`

Examples:

-   src/helpers/myHelper/index.ts - ⛔ **BAD**
-   src/helpers/myHelper.ts - 🎉 **GOOD**

### Tests

> :grey_exclamation: A good starting point is the `name` module in `src/name/**/__tests__/*`

-   `Tests` **MUST** always be written in `camelCase`
-   `Tests` **MUST** always be named after the module/method/file it tests
-   `Tests` **MUST** always reside inside a `__tests__` folder
-   `__tests__` folder **MUST** must always be in the same level of the file it tests
-   `Tests` **MUST** always have a single `describe`
-   `Tests` describe label of `methods` **MUST** always be written as `My Module | myMethodName`

Examples:

-   src/myModuleName/myMethodName/myMethodName.test.ts - ⛔ **BAD**
-   src/myModuleName/myMethodName/\_\_tests\_\_/myMethodName.test.ts - 🎉 **GOOD**

## Code of Conduct

> **Any violation of the code of conduct, can be punished by permanent ban from the repository**

-   Participants will be tolerant of opposing views
-   Participants must ensure that their language and actions are free of personal attacks and disparaging personal remarks
-   When interpreting the words and actions of others, participants should always assume good intentions
-   Behavior that can be reasonably considered harassment will not be tolerated

## Compiled Assets

Build files **MUST** never be commited when contributing to this project.

Because compiled assets are too large and hard to read, it could be used to inject malicious code inside the lib.

Thus to prevent this sort of behaviour, only maintainers are able to build and deploy.
