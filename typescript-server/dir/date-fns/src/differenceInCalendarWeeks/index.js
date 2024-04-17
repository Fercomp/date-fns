"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInCalendarWeeks = void 0;
const index_js_1 = require("../constants/index.js");
const index_js_2 = require("../startOfWeek/index.js");
const index_js_3 = require("../_lib/getTimezoneOffsetInMilliseconds/index.js");
/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */
function differenceInCalendarWeeks(dateLeft, dateRight, options) {
    const startOfWeekLeft = (0, index_js_2.startOfWeek)(dateLeft, options);
    const startOfWeekRight = (0, index_js_2.startOfWeek)(dateRight, options);
    const timestampLeft = +startOfWeekLeft - (0, index_js_3.getTimezoneOffsetInMilliseconds)(startOfWeekLeft);
    const timestampRight = +startOfWeekRight - (0, index_js_3.getTimezoneOffsetInMilliseconds)(startOfWeekRight);
    // Round the number of days to the nearest integer because the number of
    // milliseconds in a days is not constant (e.g. it's different in the week of
    // the daylight saving time clock shift).
    return Math.round((timestampLeft - timestampRight) / index_js_1.millisecondsInWeek);
}
exports.differenceInCalendarWeeks = differenceInCalendarWeeks;
