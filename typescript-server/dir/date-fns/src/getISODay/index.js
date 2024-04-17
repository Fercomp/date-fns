"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getISODay = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay(date) {
    const _date = (0, index_js_1.toDate)(date);
    let day = _date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day;
}
exports.getISODay = getISODay;
