"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yearsToQuarters = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a full number of quarters.
 *
 * @param years - The number of years to be converted
 *
 * @returns The number of years converted in quarters
 *
 * @example
 * // Convert 2 years to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */
function yearsToQuarters(years) {
    return Math.trunc(years * index_js_1.quartersInYear);
}
exports.yearsToQuarters = yearsToQuarters;
