"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoursToMinutes = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param hours - number of hours to be converted
 *
 * @returns The number of hours converted in minutes
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */
function hoursToMinutes(hours) {
    return Math.trunc(hours * index_js_1.minutesInHour);
}
exports.hoursToMinutes = hoursToMinutes;
