"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSunday = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * const result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday(date) {
    return (0, index_js_1.toDate)(date).getDay() === 0;
}
exports.isSunday = isSunday;
