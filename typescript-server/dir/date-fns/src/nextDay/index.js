"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextDay = void 0;
const index_js_1 = require("../addDays/index.js");
const index_js_2 = require("../getDay/index.js");
/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param day - day of the week
 *
 * @returns The date is the next day of week
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */
function nextDay(date, day) {
    let delta = day - (0, index_js_2.getDay)(date);
    if (delta <= 0)
        delta += 7;
    return (0, index_js_1.addDays)(date, delta);
}
exports.nextDay = nextDay;
