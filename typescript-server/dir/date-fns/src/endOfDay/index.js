"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOfDay = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay(date) {
    const _date = (0, index_js_1.toDate)(date);
    _date.setHours(23, 59, 59, 999);
    return _date;
}
exports.endOfDay = endOfDay;
