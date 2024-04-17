"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isToday = void 0;
const index_js_1 = require("../constructNow/index.js");
const index_js_2 = require("../isSameDay/index.js");
/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
    return (0, index_js_2.isSameDay)(date, (0, index_js_1.constructNow)(date));
}
exports.isToday = isToday;
