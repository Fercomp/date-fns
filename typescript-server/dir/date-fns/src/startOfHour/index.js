"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOfHour = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour(date) {
    const _date = (0, index_js_1.toDate)(date);
    _date.setMinutes(0, 0, 0);
    return _date;
}
exports.startOfHour = startOfHour;
