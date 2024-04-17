"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDay = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(date) {
    const _date = (0, index_js_1.toDate)(date);
    const day = _date.getDay();
    return day;
}
exports.getDay = getDay;
