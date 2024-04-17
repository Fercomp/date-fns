"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachQuarterOfInterval = void 0;
const index_js_1 = require("../addQuarters/index.js");
const index_js_2 = require("../startOfQuarter/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval
 *
 * @returns The array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * const result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */
function eachQuarterOfInterval(interval, options) {
    var _a;
    const startDate = (0, index_js_3.toDate)(interval.start);
    const endDate = (0, index_js_3.toDate)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed
        ? +(0, index_js_2.startOfQuarter)(startDate)
        : +(0, index_js_2.startOfQuarter)(endDate);
    let currentDate = reversed
        ? (0, index_js_2.startOfQuarter)(endDate)
        : (0, index_js_2.startOfQuarter)(startDate);
    let step = (_a = options === null || options === void 0 ? void 0 : options.step) !== null && _a !== void 0 ? _a : 1;
    if (!step)
        return [];
    if (step < 0) {
        step = -step;
        reversed = !reversed;
    }
    const dates = [];
    while (+currentDate <= endTime) {
        dates.push((0, index_js_3.toDate)(currentDate));
        currentDate = (0, index_js_1.addQuarters)(currentDate, step);
    }
    return reversed ? dates.reverse() : dates;
}
exports.eachQuarterOfInterval = eachQuarterOfInterval;
