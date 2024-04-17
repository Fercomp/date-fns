"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThisMinute = void 0;
const index_js_1 = require("../constructNow/index.js");
const index_js_2 = require("../isSameMinute/index.js");
/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * const result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */
function isThisMinute(date) {
    return (0, index_js_2.isSameMinute)(date, (0, index_js_1.constructNow)(date));
}
exports.isThisMinute = isThisMinute;
