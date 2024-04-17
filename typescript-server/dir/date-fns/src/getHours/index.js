"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHours = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours(date) {
    const _date = (0, index_js_1.toDate)(date);
    const hours = _date.getHours();
    return hours;
}
exports.getHours = getHours;
