"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachWeekendOfInterval = void 0;
const index_js_1 = require("../eachDayOfInterval/index.js");
const index_js_2 = require("../isWeekend/index.js");
/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The given interval
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */
function eachWeekendOfInterval(interval) {
    const dateInterval = (0, index_js_1.eachDayOfInterval)(interval);
    const weekends = [];
    let index = 0;
    while (index < dateInterval.length) {
        const date = dateInterval[index++];
        if ((0, index_js_2.isWeekend)(date))
            weekends.push(date);
    }
    return weekends;
}
exports.eachWeekendOfInterval = eachWeekendOfInterval;
