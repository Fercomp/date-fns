"use strict";
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsInQuarter = exports.secondsInMonth = exports.secondsInYear = exports.secondsInWeek = exports.secondsInDay = exports.secondsInMinute = exports.secondsInHour = exports.quartersInYear = exports.monthsInYear = exports.monthsInQuarter = exports.minutesInHour = exports.minutesInDay = exports.minutesInMonth = exports.minutesInYear = exports.millisecondsInSecond = exports.millisecondsInHour = exports.millisecondsInMinute = exports.millisecondsInDay = exports.millisecondsInWeek = exports.minTime = exports.maxTime = exports.daysInYear = exports.daysInWeek = void 0;
/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
exports.daysInWeek = 7;
/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
exports.daysInYear = 365.2425;
/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
exports.maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
exports.minTime = -exports.maxTime;
/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
exports.millisecondsInWeek = 604800000;
/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
exports.millisecondsInDay = 86400000;
/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
exports.millisecondsInMinute = 60000;
/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
exports.millisecondsInHour = 3600000;
/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
exports.millisecondsInSecond = 1000;
/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
exports.minutesInYear = 525600;
/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
exports.minutesInMonth = 43200;
/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
exports.minutesInDay = 1440;
/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
exports.minutesInHour = 60;
/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
exports.monthsInQuarter = 3;
/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
exports.monthsInYear = 12;
/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
exports.quartersInYear = 4;
/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
exports.secondsInHour = 3600;
/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
exports.secondsInMinute = 60;
/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
exports.secondsInDay = exports.secondsInHour * 24;
/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
exports.secondsInWeek = exports.secondsInDay * 7;
/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
exports.secondsInYear = exports.secondsInDay * exports.daysInYear;
/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
exports.secondsInMonth = exports.secondsInYear / 12;
/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
exports.secondsInQuarter = exports.secondsInMonth * 3;
