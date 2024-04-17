"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate(date) {
    const _date = (0, index_js_1.toDate)(date);
    const dayOfMonth = _date.getDate();
    return dayOfMonth;
}
exports.getDate = getDate;
