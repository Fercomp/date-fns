"use strict";
exports.isWeekend = isWeekend;
var _index = require("./toDate.js");

var _index2 = require("./_lib/defaultOptions.js");

/**
 * The {@link lastDayOfWeek} function options.
 */

/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */

function isWeekend(date, options) {
  const day = (0, _index.toDate)(date).getDay();
  const defaultOptions = (0, _index2.getDefaultOptions)();
  const weekendDays = options?.weekendDays ??
    options?.locale?.options?.weekendDays ??
    defaultOptions.weekendDays ??
    defaultOptions.locale?.options?.weekendDays ?? [0, 6];

  const aux = weekendDays;

  return aux.includes(day);
}
