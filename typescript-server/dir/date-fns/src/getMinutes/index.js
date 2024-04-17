"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinutes = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes(date) {
    const _date = (0, index_js_1.toDate)(date);
    const minutes = _date.getMinutes();
    return minutes;
}
exports.getMinutes = getMinutes;
