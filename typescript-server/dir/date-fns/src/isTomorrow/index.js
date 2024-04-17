"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTomorrow = void 0;
const index_js_1 = require("../addDays/index.js");
const index_js_2 = require("../constructNow/index.js");
const index_js_3 = require("../isSameDay/index.js");
/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(date) {
    return (0, index_js_3.isSameDay)(date, (0, index_js_1.addDays)((0, index_js_2.constructNow)(date), 1));
}
exports.isTomorrow = isTomorrow;
