"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsToMilliseconds = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name secondsToMilliseconds
 * @category Conversion Helpers
 * @summary Convert seconds to milliseconds.
 *
 * @description
 * Convert a number of seconds to a full number of milliseconds.
 *
 * @param seconds - The number of seconds to be converted
 *
 * @returns The number of seconds converted in milliseconds
 *
 * @example
 * // Convert 2 seconds into milliseconds
 * const result = secondsToMilliseconds(2)
 * //=> 2000
 */
function secondsToMilliseconds(seconds) {
    return seconds * index_js_1.millisecondsInSecond;
}
exports.secondsToMilliseconds = secondsToMilliseconds;
