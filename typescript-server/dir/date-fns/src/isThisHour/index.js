"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThisHour = void 0;
const index_js_1 = require("../constructNow/index.js");
const index_js_2 = require("../isSameHour/index.js");
/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * const result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour(date) {
    return (0, index_js_2.isSameHour)(date, (0, index_js_1.constructNow)(date));
}
exports.isThisHour = isThisHour;
