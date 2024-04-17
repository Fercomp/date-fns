"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setQuarter = void 0;
const index_js_1 = require("../setMonth/index.js");
const index_js_2 = require("../toDate/index.js");
/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param quarter - The quarter of the new date
 *
 * @returns The new date with the quarter set
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter(date, quarter) {
    const _date = (0, index_js_2.toDate)(date);
    const oldQuarter = Math.trunc(_date.getMonth() / 3) + 1;
    const diff = quarter - oldQuarter;
    return (0, index_js_1.setMonth)(_date, _date.getMonth() + diff * 3);
}
exports.setQuarter = setQuarter;
