"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThursday = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * const result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday(date) {
    return (0, index_js_1.toDate)(date).getDay() === 4;
}
exports.isThursday = isThursday;
