"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setISOWeek = void 0;
const index_js_1 = require("../getISOWeek/index.js");
const index_js_2 = require("../toDate/index.js");
/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param week - The ISO week of the new date
 *
 * @returns The new date with the ISO week set
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek(date, week) {
    const _date = (0, index_js_2.toDate)(date);
    const diff = (0, index_js_1.getISOWeek)(_date) - week;
    _date.setDate(_date.getDate() - diff * 7);
    return _date;
}
exports.setISOWeek = setISOWeek;
