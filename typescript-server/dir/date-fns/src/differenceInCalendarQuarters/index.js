"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInCalendarQuarters = void 0;
const index_js_1 = require("../getQuarter/index.js");
const index_js_2 = require("../toDate/index.js");
/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date

 * @returns The number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters(dateLeft, dateRight) {
    const _dateLeft = (0, index_js_2.toDate)(dateLeft);
    const _dateRight = (0, index_js_2.toDate)(dateRight);
    const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
    const quarterDiff = (0, index_js_1.getQuarter)(_dateLeft) - (0, index_js_1.getQuarter)(_dateRight);
    return yearDiff * 4 + quarterDiff;
}
exports.differenceInCalendarQuarters = differenceInCalendarQuarters;
