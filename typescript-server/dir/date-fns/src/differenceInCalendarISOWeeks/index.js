"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInCalendarISOWeeks = void 0;
const index_js_1 = require("../constants/index.js");
const index_js_2 = require("../startOfISOWeek/index.js");
const index_js_3 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks(dateLeft, dateRight) {
    const startOfISOWeekLeft = (0, index_js_2.startOfISOWeek)(dateLeft);
    const startOfISOWeekRight = (0, index_js_2.startOfISOWeek)(dateRight);
    const timestampLeft = +startOfISOWeekLeft - (0, index_js_3.getTimezoneOffsetInMilliseconds)(startOfISOWeekLeft);
    const timestampRight = +startOfISOWeekRight - (0, index_js_3.getTimezoneOffsetInMilliseconds)(startOfISOWeekRight);
    // Round the number of weeks to the nearest integer because the number of
    // milliseconds in a week is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((timestampLeft - timestampRight) / index_js_1.millisecondsInWeek);
}
exports.differenceInCalendarISOWeeks = differenceInCalendarISOWeeks;
