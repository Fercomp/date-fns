"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFirstDayOfMonth = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check

 * @returns The date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * const result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth(date) {
    return (0, index_js_1.toDate)(date).getDate() === 1;
}
exports.isFirstDayOfMonth = isFirstDayOfMonth;
