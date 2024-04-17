"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isYesterday = void 0;
const index_js_1 = require("../constructNow/index.js");
const index_js_2 = require("../isSameDay/index.js");
const index_js_3 = require("../subDays/index.js");
/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * const result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday(date) {
    return (0, index_js_2.isSameDay)(date, (0, index_js_3.subDays)((0, index_js_1.constructNow)(date), 1));
}
exports.isYesterday = isYesterday;
