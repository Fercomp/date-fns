"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getISOWeek = void 0;
const index_js_1 = require("../constants/index.js");
const index_js_2 = require("../startOfISOWeek/index.js");
const index_js_3 = require("../startOfISOWeekYear/index.js");
const index_js_4 = require("../toDate/index.js");
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
    const _date = (0, index_js_4.toDate)(date);
    const diff = +(0, index_js_2.startOfISOWeek)(_date) - +(0, index_js_3.startOfISOWeekYear)(_date);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / index_js_1.millisecondsInWeek) + 1;
}
exports.getISOWeek = getISOWeek;
