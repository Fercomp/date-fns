"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthsToQuarters = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param months - The number of months to be converted.
 *
 * @returns The number of months converted in quarters
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */
function monthsToQuarters(months) {
    const quarters = months / index_js_1.monthsInQuarter;
    return Math.trunc(quarters);
}
exports.monthsToQuarters = monthsToQuarters;
