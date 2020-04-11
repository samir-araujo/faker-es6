# faker-es6 - Massive realistic fake data generation tool for ES6+ projects, fully tree-shakable for a smaller package size

A heavily inspired lib to generate massive amounts of realistic fake data.

This lib was inspired by what I would like to see in [Marak/faker.js](https://github.com/Marak/faker.js) plus what I thought that could be a good exercise for myself.

[![Build Status](https://travis-ci.org/samir-araujo/faker-es6.svg?branch=master)](https://travis-ci.org/samir-araujo/faker-es6)
[![Coverage Status](https://coveralls.io/repos/github/samir-araujo/faker-es6/badge.svg?branch=master)](https://coveralls.io/github/samir-araujo/faker-es6?branch=master)
[![npm version](https://badge.fury.io/js/faker-es6.svg)](https://badge.fury.io/js/faker-es6)

## Table of contents

<!-- toc -->

-   [Installation](#installation)
-   [Getting started](#getting-started)
    -   [First name example](#first-name-example)
    -   [First name with locale example](#first-name-with-locale-example)
    -   [Importing the whole lib example](#importing-the-whole-lib-example)
-   [Available methods](#available-methods)
-   [Upcoming methods](#upcoming-methods)
-   [Localization](#localization)
    -   [Localization example with TypeScript](#localization-example-with-typescript)
    -   [Localization example without TypeScript](#localization-example-without-typescript)
    -   [ISO Language Code Table](#iso-language-code-table)
-   [Maintainer](#maintainer)
-   [Credits](#credits)
-   [License](#license)

<!-- tocstop -->

## Installation

Install `faker-es6`

```bash
yarn add --dev faker-es6
```

or

```bash
npm install --dev faker-es6
```

## Getting started

### First name example

```ts
import { firstName } from 'faker-es6/lib/name/firstName';

const name = firstName(); // Random first name: Yessenia
const anotherName = firstName(); // Random first name: Marilyne
```

### First name with locale example

```ts
import { firstName } from 'faker-es6/lib/name/firstName';
import { Locale } from 'faker-es6/lib/types/locale';

const name = firstName(Locale.PT_BR); // Random first name in pt_BR: Bruna
const anotherName = firstName(Locale.PT_BR); // Random first name in pt_BR: Paula
```

### Importing the whole lib example

```ts
import faker from 'faker-es6';

const name = faker.name.firstName(); // Random first name: Yessenia
const anotherName = faker.name.firstName(); // Random first name: Marilyne
```

## Available methods

-   name
    -   firstName
    -   lastName
    -   prefix
    -   suffix
-   helpers
    -   getLocale
    -   randomArrayElement
    -   randomArrayElements
    -   randomNumber
    -   parseRegex

## Upcoming methods

-   address
    -   city
    -   cityPrefix
    -   citySuffix
    -   country
    -   countryCode
    -   county
    -   latitude
    -   longitude
    -   secondaryAddress
    -   state
    -   stateAbbreviation
    -   streetAddress
    -   streetName
    -   streetPrefix
    -   streetSuffix
    -   zipCode
-   commerce
    -   color
    -   department
    -   price
    -   productAdjective
    -   productMaterial
    -   productName
-   company
    -   catchPhrase
    -   catchPhraseAdjective
    -   catchPhraseDescriptor
    -   catchPhraseNoun
    -   companyName
    -   companySuffix
    -   jobArea
    -   jobDescriptor
    -   jobTitle
    -   jobType
-   date
    -   between
    -   future
    -   month
    -   past
    -   recent
    -   soon
    -   weekday
-   database
    -   collation
    -   column
    -   engine
    -   type
-   finance
    -   account
    -   accountName
    -   amount
    -   bic
    -   bitcoinAddress
    -   currencyCode
    -   currencyName
    -   currencySymbol
    -   ethereumAddress
    -   iban
    -   mask
    -   transactionType
-   hacker
    -   abbreviation
    -   adjective
    -   ingverb
    -   noun
    -   phrase
    -   verb
-   helpers
    -   shuffle
    -   slugify
-   internet
    -   avatar
    -   color
    -   domainName
    -   domainSuffix
    -   domainWord
    -   email
    -   ip
    -   ipv6
    -   mac
    -   password
    -   protocol
    -   url
    -   userAgent
    -   userName
-   lorem
    -   lines
    -   paragraph
    -   paragraphs
    -   sentence
    -   sentences
    -   slug
    -   text
    -   word
    -   words
    -   homer
    -   mussum (available only in pt_BR)
    -   ronSwanson
    -   theOffice
-   name
    -   title
-   phone
    -   phoneFormats
    -   phoneNumber
    -   phoneNumberFormat
-   system
    -   commonFileExt
    -   commonFileName
    -   commonFileType
    -   directoryPath
    -   fileExt
    -   fileName
    -   filePath
    -   fileType
    -   mimeType
    -   semver

## Localization

`faker-es6` supports any ISO valid locale.

To use a locale, just pass it as a parameter in the method you want to use.

## Current available locales

Since this is lib is a WIP, at the time of development it only supports:

-   **en** 🇺🇸
-   **ja** 🇯🇵 (partial support for now)
-   **pt_BR** 🇧🇷

### Localization example with TypeScript

```ts
import { firstName } from 'faker-es6/lib/name/firstName';
import { Locale } from 'faker-es6/lib/types/locale';

const name = firstName(Locale.PT_BR); // Random first name in pt_BR: Bruna
const anotherName = firstName(Locale.PT_BR); // Random first name in pt_BR: Paula
```

> `Locale` is an TS enum object with all valid ISO language codes

### Localization example without TypeScript

```ts
import { firstName } from 'faker-es6/lib/name/firstName';

const name = firstName('pt_BR'); // Random first name in pt_BR: Bruna
const anotherName = firstName('pt_BR'); // Random first name in pt_BR: Paula
```

> For further information on the available language codes, see [ISO Language Code Table](#iso-language-code-table) section

### ISO Language Code Table

> Credits to http://www.lingoes.net/en/translator/langcode.htm

| Code   | Name                                                    |
| ------ | ------------------------------------------------------- |
| af     | Afrikaans                                               |
| af_ZA  | Afrikaans (South Africa)                                |
| ar     | Arabic                                                  |
| ar_AE  | Arabic (U.A.E.)                                         |
| ar_BH  | Arabic (Bahrain)                                        |
| ar_DZ  | Arabic (Algeria)                                        |
| ar_EG  | Arabic (Egypt)                                          |
| ar_IQ  | Arabic (Iraq)                                           |
| ar_JO  | Arabic (Jordan)                                         |
| ar_KW  | Arabic (Kuwait)                                         |
| ar_LB  | Arabic (Lebanon)                                        |
| ar_LY  | Arabic (Libya)                                          |
| ar_MA  | Arabic (Morocco)                                        |
| ar_OM  | Arabic (Oman)                                           |
| ar_QA  | Arabic (Qatar)                                          |
| ar_SA  | Arabic (Saudi Arabia)                                   |
| ar_SY  | Arabic (Syria)                                          |
| ar_TN  | Arabic (Tunisia)                                        |
| ar_YE  | Arabic (Yemen)                                          |
| az     | Azeri (Latin)                                           |
| az_AZ  | Azeri (Cyrillic) (Azerbaijan)                           |
| az_AZ  | Azeri (Latin) (Azerbaijan)                              |
| be     | Belarusian                                              |
| be_BY  | Belarusian (Belarus)                                    |
| bg     | Bulgarian                                               |
| bg_BG  | Bulgarian (Bulgaria)                                    |
| bs_BA  | Bosnian (Bosnia and Herzegovina)                        |
| ca     | Catalan                                                 |
| ca_ES  | Catalan (Spain)                                         |
| cs     | Czech                                                   |
| cs_CZ  | Czech (Czech Republic)                                  |
| cy     | Welsh                                                   |
| cy_GB  | Welsh (United Kingdom)                                  |
| da     | Danish                                                  |
| da_DK  | Danish (Denmark)                                        |
| de     | German                                                  |
| de_AT  | German (Austria)                                        |
| de_CH  | German (Switzerland)                                    |
| de_DE  | German (Germany)                                        |
| de_LI  | German (Liechtenstein)                                  |
| de_LU  | German (Luxembourg)                                     |
| dv     | Divehi                                                  |
| dv_MV  | Divehi (Maldives)                                       |
| el     | Greek                                                   |
| el_GR  | Greek (Greece)                                          |
| en     | English                                                 |
| en_AU  | English (Australia)                                     |
| en_BZ  | English (Belize)                                        |
| en_CA  | English (Canada)                                        |
| en_CB  | English (Caribbean)                                     |
| en_GB  | English (United Kingdom)                                |
| en_IE  | English (Ireland)                                       |
| en_JM  | English (Jamaica)                                       |
| en_NZ  | English (New Zealand)                                   |
| en_PH  | English (Republic of the Philippines)                   |
| en_TT  | English (Trinidad and Tobago)                           |
| en_US  | English (United States)                                 |
| en_ZA  | English (South Africa)                                  |
| en_ZW  | English (Zimbabwe)                                      |
| eo     | Esperanto                                               |
| es     | Spanish                                                 |
| es_AR  | Spanish (Argentina)                                     |
| es_BO  | Spanish (Bolivia)                                       |
| es_CL  | Spanish (Chile)                                         |
| es_CO  | Spanish (Colombia)                                      |
| es_CR  | Spanish (Costa Rica)                                    |
| es_DO  | Spanish (Dominican Republic)                            |
| es_EC  | Spanish (Ecuador)                                       |
| es_ES  | Spanish (Castilian)                                     |
| es_GT  | Spanish (Guatemala)                                     |
| es_HN  | Spanish (Honduras)                                      |
| es_MX  | Spanish (Mexico)                                        |
| es_NI  | Spanish (Nicaragua)                                     |
| es_PA  | Spanish (Panama)                                        |
| es_PE  | Spanish (Peru)                                          |
| es_PR  | Spanish (Puerto Rico)                                   |
| es_PY  | Spanish (Paraguay)                                      |
| es_SV  | Spanish (El Salvador)                                   |
| es_UY  | Spanish (Uruguay)                                       |
| es_VE  | Spanish (Venezuela)                                     |
| et     | Estonian                                                |
| et_EE  | Estonian (Estonia)                                      |
| eu     | Basque                                                  |
| eu_ES  | Basque (Spain)                                          |
| fa     | Farsi                                                   |
| fa_IR  | Farsi (Iran)                                            |
| fi     | Finnish                                                 |
| fi_FI  | Finnish (Finland)                                       |
| fo     | Faroese                                                 |
| fo_FO  | Faroese (Faroe Islands)                                 |
| fr     | French                                                  |
| fr_BE  | French (Belgium)                                        |
| fr_CA  | French (Canada)                                         |
| fr_CH  | French (Switzerland)                                    |
| fr_FR  | French (France)                                         |
| fr_LU  | French (Luxembourg)                                     |
| fr_MC  | French (Principality of Monaco)                         |
| gl     | Galician                                                |
| gl_ES  | Galician (Spain)                                        |
| gu     | Gujarati                                                |
| gu_IN  | Gujarati (India)                                        |
| he     | Hebrew                                                  |
| he_IL  | Hebrew (Israel)                                         |
| hi     | Hindi                                                   |
| hi_IN  | Hindi (India)                                           |
| hr     | Croatian                                                |
| hr_BA  | Croatian (Bosnia and Herzegovina)                       |
| hr_HR  | Croatian (Croatia)                                      |
| hu     | Hungarian                                               |
| hu_HU  | Hungarian (Hungary)                                     |
| hy     | Armenian                                                |
| hy_AM  | Armenian (Armenia)                                      |
| id     | Indonesian                                              |
| id_ID  | Indonesian (Indonesia)                                  |
| is     | Icelandic                                               |
| is_IS  | Icelandic (Iceland)                                     |
| it     | Italian                                                 |
| it_CH  | Italian (Switzerland)                                   |
| it_IT  | Italian (Italy)                                         |
| ja     | Japanese                                                |
| ja_JP  | Japanese (Japan)                                        |
| ka     | Georgian                                                |
| ka_GE  | Georgian (Georgia)                                      |
| kk     | Kazakh                                                  |
| kk_KZ  | Kazakh (Kazakhstan)                                     |
| kn     | Kannada                                                 |
| kn_IN  | Kannada (India)                                         |
| ko     | Korean                                                  |
| ko_KR  | Korean (Korea)                                          |
| kok    | Konkani                                                 |
| kok_IN | Konkani (India)                                         |
| ky     | Kyrgyz                                                  |
| ky_KG  | Kyrgyz (Kyrgyzstan)                                     |
| lt     | Lithuanian                                              |
| lt_LT  | Lithuanian (Lithuania)                                  |
| lv     | Latvian                                                 |
| lv_LV  | Latvian (Latvia)                                        |
| mi     | Maori                                                   |
| mi_NZ  | Maori (New Zealand)                                     |
| mk     | FYRO Macedonian                                         |
| mk_MK  | FYRO Macedonian (Former Yugoslav Republic of Macedonia) |
| mn     | Mongolian                                               |
| mn_MN  | Mongolian (Mongolia)                                    |
| mr     | Marathi                                                 |
| mr_IN  | Marathi (India)                                         |
| ms     | Malay                                                   |
| ms_BN  | Malay (Brunei Darussalam)                               |
| ms_MY  | Malay (Malaysia)                                        |
| mt     | Maltese                                                 |
| mt_MT  | Maltese (Malta)                                         |
| nb     | Norwegian (Bokm?l)                                      |
| nb_NO  | Norwegian (Bokm?l) (Norway)                             |
| nl     | Dutch                                                   |
| nl_BE  | Dutch (Belgium)                                         |
| nl_NL  | Dutch (Netherlands)                                     |
| nn_NO  | Norwegian (Nynorsk) (Norway)                            |
| ns     | Northern Sotho                                          |
| ns_ZA  | Northern Sotho (South Africa)                           |
| pa     | Punjabi                                                 |
| pa_IN  | Punjabi (India)                                         |
| pl     | Polish                                                  |
| pl_PL  | Polish (Poland)                                         |
| ps     | Pashto                                                  |
| ps_AR  | Pashto (Afghanistan)                                    |
| pt     | Portuguese                                              |
| pt_BR  | Portuguese (Brazil)                                     |
| pt_PT  | Portuguese (Portugal)                                   |
| qu     | Quechua                                                 |
| qu_BO  | Quechua (Bolivia)                                       |
| qu_EC  | Quechua (Ecuador)                                       |
| qu_PE  | Quechua (Peru)                                          |
| ro     | Romanian                                                |
| ro_RO  | Romanian (Romania)                                      |
| ru     | Russian                                                 |
| ru_RU  | Russian (Russia)                                        |
| sa     | Sanskrit                                                |
| sa_IN  | Sanskrit (India)                                        |
| se     | Sami (Northern)                                         |
| se_FI  | Sami (Inari) (Finland)                                  |
| se_NO  | Sami (Lule) (Norway)                                    |
| se_SE  | Sami (Lule) (Sweden)                                    |
| sk     | Slovak                                                  |
| sk_SK  | Slovak (Slovakia)                                       |
| sl     | Slovenian                                               |
| sl_SI  | Slovenian (Slovenia)                                    |
| sq     | Albanian                                                |
| sq_AL  | Albanian (Albania)                                      |
| sr_BA  | Serbian (Cyrillic) (Bosnia and Herzegovina)             |
| sr_SP  | Serbian (Cyrillic) (Serbia and Montenegro)              |
| sv     | Swedish                                                 |
| sv_FI  | Swedish (Finland)                                       |
| sv_SE  | Swedish (Sweden)                                        |
| sw     | Swahili                                                 |
| sw_KE  | Swahili (Kenya)                                         |
| syr    | Syriac                                                  |
| syr_SY | Syriac (Syria)                                          |
| ta     | Tamil                                                   |
| ta_IN  | Tamil (India)                                           |
| te     | Telugu                                                  |
| te_IN  | Telugu (India)                                          |
| th     | Thai                                                    |
| th_TH  | Thai (Thailand)                                         |
| tl     | Tagalog                                                 |
| tl_PH  | Tagalog (Philippines)                                   |
| tn     | Tswana                                                  |
| tn_ZA  | Tswana (South Africa)                                   |
| tr     | Turkish                                                 |
| tr_TR  | Turkish (Turkey)                                        |
| ts     | Tsonga                                                  |
| tt     | Tatar                                                   |
| tt_RU  | Tatar (Russia)                                          |
| uk     | Ukrainian                                               |
| uk_UA  | Ukrainian (Ukraine)                                     |
| ur     | Urdu                                                    |
| ur_PK  | Urdu (Islamic Republic of Pakistan)                     |
| uz     | Uzbek (Latin)                                           |
| uz_UZ  | Uzbek (Cyrillic) (Uzbekistan)                           |
| uz_UZ  | Uzbek (Latin) (Uzbekistan)                              |
| vi     | Vietnamese                                              |
| vi_VN  | Vietnamese (Viet Nam)                                   |
| xh     | Xhosa                                                   |
| xh_ZA  | Xhosa (South Africa)                                    |
| zh     | Chinese                                                 |
| zh_CN  | Chinese (S)                                             |
| zh_HK  | Chinese (Hong Kong)                                     |
| zh_MO  | Chinese (Macau)                                         |
| zh_SG  | Chinese (Singapore)                                     |
| zh_TW  | Chinese (T)                                             |
| zu     | Zulu                                                    |
| zu_ZA  | Zulu (South Africa)                                     |

## Maintainer

**[Samir J M Araujo](https://github.com/samir-araujo)**

faker-es6 - Copyright (c) 2020 Samir J M Araujo - https://github.com/samir-araujo

If you ever think about copying, distributing, changing or anything related, please DO.

It would be awesome to see other people participating in this project in any possible ways.

All I ask is to leave some credit back to this repository :grin:

## Credits

This lib was inspired mostly by how I wanted to use [Marak/faker.js](https://github.com/Marak/faker.js), but I also have to thanks a lot these guys:

-   https://github.com/Marak/faker.js
-   http://www.lingoes.net/en/translator/langcode.htm
-   https://github.com/ran81/homer-ipsum
-   https://github.com/yoscheherazade/the-office-quotes-json
-   https://github.com/erabug/simpsons-quotes
-   https://github.com/jamesseanwright/ron-swanson-quotes

## License

MIT License

Copyright (c) 2020 Samir J M Araujo <samir.blanc@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
