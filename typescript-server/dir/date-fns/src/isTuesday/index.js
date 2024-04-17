"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTuesday = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * const result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday(date) {
    return (0, index_js_1.toDate)(date).getDay() === 2;
}
exports.isTuesday = isTuesday;
