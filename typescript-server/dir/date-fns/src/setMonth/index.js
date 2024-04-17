"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMonth = void 0;
const index_js_1 = require("../constructFrom/index.js");
const index_js_2 = require("../getDaysInMonth/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth(date, month) {
    const _date = (0, index_js_3.toDate)(date);
    const year = _date.getFullYear();
    const day = _date.getDate();
    const dateWithDesiredMonth = (0, index_js_1.constructFrom)(date, 0);
    dateWithDesiredMonth.setFullYear(year, month, 15);
    dateWithDesiredMonth.setHours(0, 0, 0, 0);
    const daysInMonth = (0, index_js_2.getDaysInMonth)(dateWithDesiredMonth);
    // Set the last day of the new month
    // if the original date was the last day of the longer month
    _date.setMonth(month, Math.min(day, daysInMonth));
    return _date;
}
exports.setMonth = setMonth;
