"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSaturday = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * const result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday(date) {
    return (0, index_js_1.toDate)(date).getDay() === 6;
}
exports.isSaturday = isSaturday;
