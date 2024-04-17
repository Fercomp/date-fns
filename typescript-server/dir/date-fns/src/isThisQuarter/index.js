"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThisQuarter = void 0;
const index_js_1 = require("../constructNow/index.js");
const index_js_2 = require("../isSameQuarter/index.js");
/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * const result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
function isThisQuarter(date) {
    return (0, index_js_2.isSameQuarter)(date, (0, index_js_1.constructNow)(date));
}
exports.isThisQuarter = isThisQuarter;
