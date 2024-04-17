"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFriday = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * const result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday(date) {
    return (0, index_js_1.toDate)(date).getDay() === 5;
}
exports.isFriday = isFriday;
