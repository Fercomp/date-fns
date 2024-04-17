"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareAsc = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dateLeft, dateRight) {
    const _dateLeft = (0, index_js_1.toDate)(dateLeft);
    const _dateRight = (0, index_js_1.toDate)(dateRight);
    const diff = _dateLeft.getTime() - _dateRight.getTime();
    if (diff < 0) {
        return -1;
    }
    else if (diff > 0) {
        return 1;
        // Return 0 if diff is 0; return NaN if diff is NaN
    }
    else {
        return diff;
    }
}
exports.compareAsc = compareAsc;
