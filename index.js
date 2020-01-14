'use strict';

module.exports = (input, substring, {caseSensitive = true, locale = 'en-US'} = {}) => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected input to be a string, got ${typeof input}`);
  }

  if (typeof substring !== 'string' && !Array.isArray(substring)) {
    throw new TypeError(`Expected substring to be a string or array, got ${typeof substring}`);
  }

  if (Array.isArray(substring)) {
    if (!caseSensitive) {
      return new RegExp(substring.join('|'), caseSensitive ? '' : 'i').test(input.toLocaleLowerCase(locale));
    }

    return new RegExp(substring.join('|'), caseSensitive ? '' : 'i').test(input);
  }

  if (!caseSensitive) {
    return input.toLocaleLowerCase(locale).indexOf(substring.toLocaleLowerCase(locale)) > -1;
  }

  return input.indexOf(substring) > -1;
};
