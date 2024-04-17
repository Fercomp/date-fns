"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intervalToDuration = void 0;
const index_js_1 = require("../add/index.js");
const index_js_2 = require("../differenceInDays/index.js");
const index_js_3 = require("../differenceInHours/index.js");
const index_js_4 = require("../differenceInMinutes/index.js");
const index_js_5 = require("../differenceInMonths/index.js");
const index_js_6 = require("../differenceInSeconds/index.js");
const index_js_7 = require("../differenceInYears/index.js");
const index_js_8 = require("../toDate/index.js");
/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval to convert to duration
 *
 * @returns The duration object
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */
function intervalToDuration(interval) {
    const start = (0, index_js_8.toDate)(interval.start);
    const end = (0, index_js_8.toDate)(interval.end);
    const duration = {};
    const years = (0, index_js_7.differenceInYears)(end, start);
    if (years)
        duration.years = years;
    const remainingMonths = (0, index_js_1.add)(start, { years: duration.years });
    const months = (0, index_js_5.differenceInMonths)(end, remainingMonths);
    if (months)
        duration.months = months;
    const remainingDays = (0, index_js_1.add)(remainingMonths, { months: duration.months });
    const days = (0, index_js_2.differenceInDays)(end, remainingDays);
    if (days)
        duration.days = days;
    const remainingHours = (0, index_js_1.add)(remainingDays, { days: duration.days });
    const hours = (0, index_js_3.differenceInHours)(end, remainingHours);
    if (hours)
        duration.hours = hours;
    const remainingMinutes = (0, index_js_1.add)(remainingHours, { hours: duration.hours });
    const minutes = (0, index_js_4.differenceInMinutes)(end, remainingMinutes);
    if (minutes)
        duration.minutes = minutes;
    const remainingSeconds = (0, index_js_1.add)(remainingMinutes, { minutes: duration.minutes });
    const seconds = (0, index_js_6.differenceInSeconds)(end, remainingSeconds);
    if (seconds)
        duration.seconds = seconds;
    return duration;
}
exports.intervalToDuration = intervalToDuration;
