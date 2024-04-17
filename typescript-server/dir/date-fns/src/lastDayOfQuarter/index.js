"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lastDayOfQuarter = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * const result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter(date) {
    const _date = (0, index_js_1.toDate)(date);
    const currentMonth = _date.getMonth();
    const month = currentMonth - (currentMonth % 3) + 3;
    _date.setMonth(month, 0);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
exports.lastDayOfQuarter = lastDayOfQuarter;
