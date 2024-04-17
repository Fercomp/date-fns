"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInMinutes = void 0;
const index_js_1 = require("../_lib/getRoundingMethod/index.js");
const index_js_2 = require("../constants/index.js");
const index_js_3 = require("../differenceInMilliseconds/index.js");
/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */
function differenceInMinutes(dateLeft, dateRight, options) {
    const diff = (0, index_js_3.differenceInMilliseconds)(dateLeft, dateRight) / index_js_2.millisecondsInMinute;
    return (0, index_js_1.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.differenceInMinutes = differenceInMinutes;
