"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeconds = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds(date) {
    const _date = (0, index_js_1.toDate)(date);
    const seconds = _date.getSeconds();
    return seconds;
}
exports.getSeconds = getSeconds;
