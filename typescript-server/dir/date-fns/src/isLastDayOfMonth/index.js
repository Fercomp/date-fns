"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLastDayOfMonth = void 0;
const index_js_1 = require("../endOfDay/index.js");
const index_js_2 = require("../endOfMonth/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check

 * @returns The date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * const result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth(date) {
    const _date = (0, index_js_3.toDate)(date);
    return +(0, index_js_1.endOfDay)(_date) === +(0, index_js_2.endOfMonth)(_date);
}
exports.isLastDayOfMonth = isLastDayOfMonth;
