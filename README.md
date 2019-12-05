# Is Punycode [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/is-punycode/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/is-punycode)

Check if a string is punycode.

[![NPM Badge](https://nodei.co/npm/is-punycode.png)](https://npmjs.com/package/is-punycode)

## Install

```sh
npm install is-punycode
```

## Usage

```js
const punycodeRegex = require("punycode-regex");

isPunycode("xn--tiq49xqyj")
//=> true
```

## API

### isPunycode(string)

#### string

Type: `string`

The string to check.
