"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInMonths = void 0;
const index_js_1 = require("../compareAsc/index.js");
const index_js_2 = require("../differenceInCalendarMonths/index.js");
const index_js_3 = require("../isLastDayOfMonth/index.js");
const index_js_4 = require("../toDate/index.js");
/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */
function differenceInMonths(dateLeft, dateRight) {
    const _dateLeft = (0, index_js_4.toDate)(dateLeft);
    const _dateRight = (0, index_js_4.toDate)(dateRight);
    const sign = (0, index_js_1.compareAsc)(_dateLeft, _dateRight);
    const difference = Math.abs((0, index_js_2.differenceInCalendarMonths)(_dateLeft, _dateRight));
    let result;
    // Check for the difference of less than month
    if (difference < 1) {
        result = 0;
    }
    else {
        if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
            // This will check if the date is end of Feb and assign a higher end of month date
            // to compare it with Jan
            _dateLeft.setDate(30);
        }
        _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);
        // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
        // If so, result must be decreased by 1 in absolute value
        let isLastMonthNotFull = (0, index_js_1.compareAsc)(_dateLeft, _dateRight) === -sign;
        // Check for cases of one full calendar month
        if ((0, index_js_3.isLastDayOfMonth)((0, index_js_4.toDate)(dateLeft)) &&
            difference === 1 &&
            (0, index_js_1.compareAsc)(dateLeft, _dateRight) === 1) {
            isLastMonthNotFull = false;
        }
        result = sign * (difference - Number(isLastMonthNotFull));
    }
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.differenceInMonths = differenceInMonths;
