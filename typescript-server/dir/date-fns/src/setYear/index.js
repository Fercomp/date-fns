"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setYear = void 0;
const index_js_1 = require("../constructFrom/index.js");
const index_js_2 = require("../toDate/index.js");
/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear(date, year) {
    const _date = (0, index_js_2.toDate)(date);
    // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
    if (isNaN(+_date)) {
        return (0, index_js_1.constructFrom)(date, NaN);
    }
    _date.setFullYear(year);
    return _date;
}
exports.setYear = setYear;
