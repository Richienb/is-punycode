/**
 * Check if a string is punycode.
 * @param string The string to check.
 * @example
 * ```
 * const punycodeRegex = require("punycode-regex");
 *
 * isPunycode("xn--tiq49xqyj")
 * //=> true
 * ```
*/
declare function isPunycode(string: string): boolean;

export = isPunycode;
