"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSeconds = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param seconds - The seconds of the new date
 *
 * @returns The new date with the seconds set
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds(date, seconds) {
    const _date = (0, index_js_1.toDate)(date);
    _date.setSeconds(seconds);
    return _date;
}
exports.setSeconds = setSeconds;
