"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachMinuteOfInterval = void 0;
const index_js_1 = require("../addMinutes/index.js");
const index_js_2 = require("../startOfMinute/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of minutes from the minute of the interval start to the minute of the interval end
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */
function eachMinuteOfInterval(interval, options) {
    var _a;
    const startDate = (0, index_js_2.startOfMinute)((0, index_js_3.toDate)(interval.start));
    const endDate = (0, index_js_3.toDate)(interval.end);
    let reversed = +startDate > +endDate;
    const endTime = reversed ? +startDate : +endDate;
    let currentDate = reversed ? endDate : startDate;
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
        currentDate = (0, index_js_1.addMinutes)(currentDate, step);
    }
    return reversed ? dates.reverse() : dates;
}
exports.eachMinuteOfInterval = eachMinuteOfInterval;
