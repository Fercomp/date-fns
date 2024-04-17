"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYear = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear(date) {
    return (0, index_js_1.toDate)(date).getFullYear();
}
exports.getYear = getYear;
