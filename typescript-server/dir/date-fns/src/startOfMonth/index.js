"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOfMonth = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(date) {
    const _date = (0, index_js_1.toDate)(date);
    _date.setDate(1);
    _date.setHours(0, 0, 0, 0);
    return _date;
}
exports.startOfMonth = startOfMonth;
