"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBusinessDays = void 0;
const index_js_1 = require("../constructFrom/index.js");
const index_js_2 = require("../isSaturday/index.js");
const index_js_3 = require("../isSunday/index.js");
const index_js_4 = require("../isWeekend/index.js");
const index_js_5 = require("../toDate/index.js");
/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of business days to be added.
 *
 * @returns The new date with the business days added
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */
function addBusinessDays(date, amount) {
    const _date = (0, index_js_5.toDate)(date);
    const startedOnWeekend = (0, index_js_4.isWeekend)(_date);
    if (isNaN(amount))
        return (0, index_js_1.constructFrom)(date, NaN);
    const hours = _date.getHours();
    const sign = amount < 0 ? -1 : 1;
    const fullWeeks = Math.trunc(amount / 5);
    _date.setDate(_date.getDate() + fullWeeks * 7);
    // Get remaining days not part of a full week
    let restDays = Math.abs(amount % 5);
    // Loops over remaining days
    while (restDays > 0) {
        _date.setDate(_date.getDate() + sign);
        if (!(0, index_js_4.isWeekend)(_date))
            restDays -= 1;
    }
    // If the date is a weekend day and we reduce a dividable of
    // 5 from it, we land on a weekend date.
    // To counter this, we add days accordingly to land on the next business day
    if (startedOnWeekend && (0, index_js_4.isWeekend)(_date) && amount !== 0) {
        // If we're reducing days, we want to add days until we land on a weekday
        // If we're adding days we want to reduce days until we land on a weekday
        if ((0, index_js_2.isSaturday)(_date))
            _date.setDate(_date.getDate() + (sign < 0 ? 2 : -1));
        if ((0, index_js_3.isSunday)(_date))
            _date.setDate(_date.getDate() + (sign < 0 ? 1 : -2));
    }
    // Restore hours to avoid DST lag
    _date.setHours(hours);
    return _date;
}
exports.addBusinessDays = addBusinessDays;
