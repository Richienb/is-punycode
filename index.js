"use strict"

const punycodeRegex = require("punycode-regex")()

module.exports = (string) => punycodeRegex.test(string)
