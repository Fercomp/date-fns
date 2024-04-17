"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.millisecondsToMinutes = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name millisecondsToMinutes
 * @category Conversion Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * Convert a number of milliseconds to a full number of minutes.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in minutes
 *
 * @example
 * // Convert 60000 milliseconds to minutes:
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToMinutes(119999)
 * //=> 1
 */
function millisecondsToMinutes(milliseconds) {
    const minutes = milliseconds / index_js_1.millisecondsInMinute;
    return Math.trunc(minutes);
}
exports.millisecondsToMinutes = millisecondsToMinutes;
