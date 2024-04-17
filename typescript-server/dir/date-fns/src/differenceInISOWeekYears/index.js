"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInISOWeekYears = void 0;
const index_js_1 = require("../compareAsc/index.js");
const index_js_2 = require("../differenceInCalendarISOWeekYears/index.js");
const index_js_3 = require("../subISOWeekYears/index.js");
const index_js_4 = require("../toDate/index.js");
/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * const result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
function differenceInISOWeekYears(dateLeft, dateRight) {
    let _dateLeft = (0, index_js_4.toDate)(dateLeft);
    const _dateRight = (0, index_js_4.toDate)(dateRight);
    const sign = (0, index_js_1.compareAsc)(_dateLeft, _dateRight);
    const difference = Math.abs((0, index_js_2.differenceInCalendarISOWeekYears)(_dateLeft, _dateRight));
    _dateLeft = (0, index_js_3.subISOWeekYears)(_dateLeft, sign * difference);
    // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
    // if last calendar ISO year is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastISOWeekYearNotFull = Number((0, index_js_1.compareAsc)(_dateLeft, _dateRight) === -sign);
    const result = sign * (difference - isLastISOWeekYearNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.differenceInISOWeekYears = differenceInISOWeekYears;
