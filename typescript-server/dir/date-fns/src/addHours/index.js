"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHours = void 0;
const index_js_1 = require("../addMilliseconds/index.js");
const index_js_2 = require("../constants/index.js");
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added.
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours(date, amount) {
    return (0, index_js_1.addMilliseconds)(date, amount * index_js_2.millisecondsInHour);
}
exports.addHours = addHours;
