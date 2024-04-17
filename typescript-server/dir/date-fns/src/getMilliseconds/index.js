"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMilliseconds = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
function getMilliseconds(date) {
    const _date = (0, index_js_1.toDate)(date);
    const milliseconds = _date.getMilliseconds();
    return milliseconds;
}
exports.getMilliseconds = getMilliseconds;
