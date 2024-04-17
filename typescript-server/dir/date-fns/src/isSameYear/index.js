"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameYear = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */
function isSameYear(dateLeft, dateRight) {
    const _dateLeft = (0, index_js_1.toDate)(dateLeft);
    const _dateRight = (0, index_js_1.toDate)(dateRight);
    return _dateLeft.getFullYear() === _dateRight.getFullYear();
}
exports.isSameYear = isSameYear;
