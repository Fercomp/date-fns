"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuarter = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter(date) {
    const _date = (0, index_js_1.toDate)(date);
    const quarter = Math.trunc(_date.getMonth() / 3) + 1;
    return quarter;
}
exports.getQuarter = getQuarter;
