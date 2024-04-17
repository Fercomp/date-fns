"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yearsToDays = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name yearsToDays
 * @category Conversion Helpers
 * @summary Convert years to days.
 *
 * @description
 * Convert a number of years to a full number of days.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in days
 *
 * @example
 * // Convert 2 years into days
 * const result = yearsToDays(2)
 * //=> 730
 */
function yearsToDays(years) {
    return Math.trunc(years * index_js_1.daysInYear);
}
exports.yearsToDays = yearsToDays;
