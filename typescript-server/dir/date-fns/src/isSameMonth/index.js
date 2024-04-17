"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameMonth = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(dateLeft, dateRight) {
    const _dateLeft = (0, index_js_1.toDate)(dateLeft);
    const _dateRight = (0, index_js_1.toDate)(dateRight);
    return (_dateLeft.getFullYear() === _dateRight.getFullYear() &&
        _dateLeft.getMonth() === _dateRight.getMonth());
}
exports.isSameMonth = isSameMonth;
