"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesToHours = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in hours
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */
function minutesToHours(minutes) {
    const hours = minutes / index_js_1.minutesInHour;
    return Math.trunc(hours);
}
exports.minutesToHours = minutesToHours;
