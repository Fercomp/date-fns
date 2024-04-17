"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.millisecondsToHours = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in hours
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */
function millisecondsToHours(milliseconds) {
    const hours = milliseconds / index_js_1.millisecondsInHour;
    return Math.trunc(hours);
}
exports.millisecondsToHours = millisecondsToHours;
