"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quartersToMonths = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param quarters - The number of quarters to be converted
 *
 * @returns The number of quarters converted in months
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */
function quartersToMonths(quarters) {
    return Math.trunc(quarters * index_js_1.monthsInQuarter);
}
exports.quartersToMonths = quartersToMonths;
