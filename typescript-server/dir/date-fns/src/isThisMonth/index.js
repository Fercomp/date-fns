"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThisMonth = void 0;
const index_js_1 = require("../constructNow/index.js");
const index_js_2 = require("../isSameMonth/index.js");
/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth(date) {
    return (0, index_js_2.isSameMonth)(date, (0, index_js_1.constructNow)(date));
}
exports.isThisMonth = isThisMonth;
