"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMonday = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * const result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday(date) {
    return (0, index_js_1.toDate)(date).getDay() === 1;
}
exports.isMonday = isMonday;
