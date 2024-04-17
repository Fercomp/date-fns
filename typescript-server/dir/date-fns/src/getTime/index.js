"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime(date) {
    const _date = (0, index_js_1.toDate)(date);
    const timestamp = _date.getTime();
    return timestamp;
}
exports.getTime = getTime;
