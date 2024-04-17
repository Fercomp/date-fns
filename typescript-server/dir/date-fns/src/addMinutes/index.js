"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMinutes = void 0;
const index_js_1 = require("../addMilliseconds/index.js");
const index_js_2 = require("../constants/index.js");
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of minutes to be added.
 *
 * @returns The new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(date, amount) {
    return (0, index_js_1.addMilliseconds)(date, amount * index_js_2.millisecondsInMinute);
}
exports.addMinutes = addMinutes;
