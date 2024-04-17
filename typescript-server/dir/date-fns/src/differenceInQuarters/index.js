"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInQuarters = void 0;
const index_js_1 = require("../_lib/getRoundingMethod/index.js");
const index_js_2 = require("../differenceInMonths/index.js");
/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 * @param options - An object with options.
 *
 * @returns The number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */
function differenceInQuarters(dateLeft, dateRight, options) {
    const diff = (0, index_js_2.differenceInMonths)(dateLeft, dateRight) / 3;
    return (0, index_js_1.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}
exports.differenceInQuarters = differenceInQuarters;
