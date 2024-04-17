"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getISOWeeksInYear = void 0;
const index_js_1 = require("../addWeeks/index.js");
const index_js_2 = require("../constants/index.js");
const index_js_3 = require("../startOfISOWeekYear/index.js");
/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear(date) {
    const thisYear = (0, index_js_3.startOfISOWeekYear)(date);
    const nextYear = (0, index_js_3.startOfISOWeekYear)((0, index_js_1.addWeeks)(thisYear, 60));
    const diff = +nextYear - +thisYear;
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round(diff / index_js_2.millisecondsInWeek);
}
exports.getISOWeeksInYear = getISOWeeksInYear;
