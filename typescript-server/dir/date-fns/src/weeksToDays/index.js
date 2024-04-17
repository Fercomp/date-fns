"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weeksToDays = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param weeks - The number of weeks to be converted
 *
 * @returns The number of weeks converted in days
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */
function weeksToDays(weeks) {
    return Math.trunc(weeks * index_js_1.daysInWeek);
}
exports.weeksToDays = weeksToDays;
