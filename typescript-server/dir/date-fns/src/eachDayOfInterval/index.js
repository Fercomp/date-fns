"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachDayOfInterval = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of days from the day of the interval start to the day of the interval end
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDayOfInterval(interval, options) {
    var _a;
    const startDate = (0, index_js_1.toDate)(interval.start);
    const endDate = (0, index_js_1.toDate)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    const currentDate = reversed ? endDate : startDate;
    currentDate.setHours(0, 0, 0, 0);
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
        currentDate.setDate(currentDate.getDate() + step);
        currentDate.setHours(0, 0, 0, 0);
    }
    return reversed ? dates.reverse() : dates;
}
exports.eachDayOfInterval = eachDayOfInterval;
