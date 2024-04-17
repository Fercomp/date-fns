"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.millisecondsToSeconds = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param milliseconds - The number of milliseconds to be converted
 *
 * @returns The number of milliseconds converted in seconds
 *
 * @example
 * // Convert 1000 miliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */
function millisecondsToSeconds(milliseconds) {
    const seconds = milliseconds / index_js_1.millisecondsInSecond;
    return Math.trunc(seconds);
}
exports.millisecondsToSeconds = millisecondsToSeconds;
