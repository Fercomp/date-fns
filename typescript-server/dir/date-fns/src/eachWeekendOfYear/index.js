"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eachWeekendOfYear = void 0;
const index_js_1 = require("../eachWeekendOfInterval/index.js");
const index_js_2 = require("../endOfYear/index.js");
const index_js_3 = require("../startOfYear/index.js");
/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given year
 *
 * @returns An array containing all the Saturdays and Sundays
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * const result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */
function eachWeekendOfYear(date) {
    const start = (0, index_js_3.startOfYear)(date);
    const end = (0, index_js_2.endOfYear)(date);
    return (0, index_js_1.eachWeekendOfInterval)({ start, end });
}
exports.eachWeekendOfYear = eachWeekendOfYear;
