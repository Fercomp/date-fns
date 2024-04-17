"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachMonthOfInterval = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */
function eachMonthOfInterval(interval, options) {
    var _a;
    const startDate = (0, index_js_1.toDate)(interval.start);
    const endDate = (0, index_js_1.toDate)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    const currentDate = reversed ? endDate : startDate;
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setDate(1);
    let step = (_a = options === null || options === void 0 ? void 0 : options.step) !== null && _a !== void 0 ? _a : 1;
    if (!step)
        return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while (+currentDate <= endTime) {
        dates.push((0, index_js_1.toDate)(currentDate));
        currentDate.setMonth(currentDate.getMonth() + step);
    }
    return reversed ? dates.reverse() : dates;
}
exports.eachMonthOfInterval = eachMonthOfInterval;
