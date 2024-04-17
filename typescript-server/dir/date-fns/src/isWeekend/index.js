"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeekend = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend(date) {
    const day = (0, index_js_1.toDate)(date).getDay();
    return day === 0 || day === 6;
}
exports.isWeekend = isWeekend;
