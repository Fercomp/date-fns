"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.previousDay = void 0;
const index_js_1 = require("../getDay/index.js");
const index_js_2 = require("../subDays/index.js");
/**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param day - The day of the week
 *
 * @returns The date is the previous day of week
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * const result = previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * const result = previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */
function previousDay(date, day) {
    let delta = (0, index_js_1.getDay)(date) - day;
    if (delta <= 0)
        delta += 7;
    return (0, index_js_2.subDays)(date, delta);
}
exports.previousDay = previousDay;
