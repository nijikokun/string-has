# string-has [![Build Status](https://github.com/nijikokun/string-has/workflows/Tests/badge.svg?branch=master)](https://github.com/nijikokun/string-has/actions)

> Check whether string contains another string, or one of many strings. Supports locale and case-sensitive / case-insensitive matching.


## Install

```
$ npm install string-has
```


## Usage

```js
const has = require('string-has');

has('unicorns', 'corn');
//=> true

has('unicorns', ['uni', 'corn']);
//=> true
```


## API

### has(input, substring, options?)

#### input

Type: `string`

String to be checked against

#### substring

Type: `string` or `array[string]`

Single substring or array of substrings for `input` to be tested against

#### options

Type: `object`

##### caseSensitive

Type: `boolean`
Default: `true`

Should matching be case sensitive, or not.

##### locale

Type: `string`
Default: `en-US`

Locale to use when converting `input` and `substring` to lowercase for case in-sensitive matching.