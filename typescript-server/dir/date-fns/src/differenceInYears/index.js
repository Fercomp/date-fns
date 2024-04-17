"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInYears = void 0;
const index_js_1 = require("../compareAsc/index.js");
const index_js_2 = require("../differenceInCalendarYears/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */
function differenceInYears(dateLeft, dateRight) {
    const _dateLeft = (0, index_js_3.toDate)(dateLeft);
    const _dateRight = (0, index_js_3.toDate)(dateRight);
    const sign = (0, index_js_1.compareAsc)(_dateLeft, _dateRight);
    const difference = Math.abs((0, index_js_2.differenceInCalendarYears)(_dateLeft, _dateRight));
    // Set both dates to a valid leap year for accurate comparison when dealing
    // with leap days
    _dateLeft.setFullYear(1584);
    _dateRight.setFullYear(1584);
    // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
    // If so, result must be decreased by 1 in absolute value
    const isLastYearNotFull = (0, index_js_1.compareAsc)(_dateLeft, _dateRight) === -sign;
    const result = sign * (difference - +isLastYearNotFull);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.differenceInYears = differenceInYears;
