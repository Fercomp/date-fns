"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachHourOfInterval = void 0;
const index_js_1 = require("../addHours/index.js");
const index_js_2 = require("../toDate/index.js");
/**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of hours from the hour of the interval start to the hour of the interval end
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * const result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * })
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */
function eachHourOfInterval(interval, options) {
    var _a;
    const startDate = (0, index_js_2.toDate)(interval.start);
    const endDate = (0, index_js_2.toDate)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    let currentDate = reversed ? endDate : startDate;
    currentDate.setMinutes(0, 0, 0);
    let step = (_a = options === null || options === void 0 ? void 0 : options.step) !== null && _a !== void 0 ? _a : 1;
    if (!step)
        return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while (+currentDate <= endTime) {
        dates.push((0, index_js_2.toDate)(currentDate));
        currentDate = (0, index_js_1.addHours)(currentDate, step);
    }
    return reversed ? dates.reverse() : dates;
}
exports.eachHourOfInterval = eachHourOfInterval;
