"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysToWeeks = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param days - The number of days to be converted
 *
 * @returns The number of days converted in weeks
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses trunc rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */
function daysToWeeks(days) {
    const weeks = days / index_js_1.daysInWeek;
    const result = Math.trunc(weeks);
    // Prevent negative zero
    return result === 0 ? 0 : result;
}
exports.daysToWeeks = daysToWeeks;
