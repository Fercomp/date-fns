"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setISODay = void 0;
const index_js_1 = require("../addDays/index.js");
const index_js_2 = require("../getISODay/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the ISO week of the new date
 *
 * @returns The new date with the day of the ISO week set
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay(date, day) {
    const _date = (0, index_js_3.toDate)(date);
    const currentDay = (0, index_js_2.getISODay)(_date);
    const diff = day - currentDay;
    return (0, index_js_1.addDays)(_date, diff);
}
exports.setISODay = setISODay;
