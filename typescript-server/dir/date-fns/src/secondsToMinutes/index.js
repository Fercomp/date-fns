"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsToMinutes = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name secondsToMinutes
 * @category Conversion Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert a number of seconds to a full number of minutes.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in minutes
 *
 * @example
 * // Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToMinutes(119)
 * //=> 1
 */
function secondsToMinutes(seconds) {
    const minutes = seconds / index_js_1.secondsInMinute;
    return Math.trunc(minutes);
}
exports.secondsToMinutes = secondsToMinutes;
