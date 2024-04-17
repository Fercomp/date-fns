"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInSeconds = void 0;
const index_js_1 = require("../_lib/getRoundingMethod/index.js");
const index_js_2 = require("../differenceInMilliseconds/index.js");
/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds(dateLeft, dateRight, options) {
    const diff = (0, index_js_2.differenceInMilliseconds)(dateLeft, dateRight) / 1000;
    return (0, index_js_1.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.differenceInSeconds = differenceInSeconds;
