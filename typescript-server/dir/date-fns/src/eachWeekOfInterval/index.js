"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachWeekOfInterval = void 0;
const index_js_1 = require("../addWeeks/index.js");
const index_js_2 = require("../startOfWeek/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of weeks from the week of the interval start to the week of the interval end
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * const result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */
function eachWeekOfInterval(interval, options) {
    var _a;
    const startDate = (0, index_js_3.toDate)(interval.start);
    const endDate = (0, index_js_3.toDate)(interval.end);
    let reversed = +startDate > +endDate;
    const startDateWeek = reversed
        ? (0, index_js_2.startOfWeek)(endDate, options)
        : (0, index_js_2.startOfWeek)(startDate, options);
    const endDateWeek = reversed
        ? (0, index_js_2.startOfWeek)(startDate, options)
        : (0, index_js_2.startOfWeek)(endDate, options);
    // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
    startDateWeek.setHours(15);
    endDateWeek.setHours(15);
    const endTime = +endDateWeek.getTime();
    let currentDate = startDateWeek;
    let step = (_a = options === null || options === void 0 ? void 0 : options.step) !== null && _a !== void 0 ? _a : 1;
    if (!step)
        return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while (+currentDate <= endTime) {
        currentDate.setHours(0);
        dates.push((0, index_js_3.toDate)(currentDate));
        currentDate = (0, index_js_1.addWeeks)(currentDate, step);
        currentDate.setHours(15);
    }
    return reversed ? dates.reverse() : dates;
}
exports.eachWeekOfInterval = eachWeekOfInterval;
