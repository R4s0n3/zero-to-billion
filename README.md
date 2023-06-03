# Number Formatter

[![npm version](https://badge.fury.io/js/zero-to-billion.svg)](https://badge.fury.io/js/zero-to-billion)

A lightweight npm module to format large numbers with suffixes.


## Installation

Install the package via npm:
npm i zero-to-billion

## Usage

In your JavaScript or TypeScript file, import the `zeroToBillion` function from the package:

```javascript
const { zeroToBillion } = require('zero-to-billion');
// or
import { zeroToBillion } from 'zero-to-billion';

console.log(zeroToBillion(500)); // Output: 500
console.log(zeroToBillion(1500)); // Output: 1.5K
console.log(zeroToBillion(1200000)); // Output: 1.2M
console.log(zeroToBillion(3500000000)); // Output: 3.5B


