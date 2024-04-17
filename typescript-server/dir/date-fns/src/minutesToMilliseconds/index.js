"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesToMilliseconds = void 0;
const index_js_1 = require("../constants/index.js");
/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param minutes - The number of minutes to be converted
 *
 * @returns The number of minutes converted in milliseconds
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */
function minutesToMilliseconds(minutes) {
    return Math.trunc(minutes * index_js_1.millisecondsInMinute);
}
exports.minutesToMilliseconds = minutesToMilliseconds;
