"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextSunday = void 0;
const index_js_1 = require("../nextDay/index.js");
/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Sunday
 *
 * @example
 * // When is the next Sunday after Mar, 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */
function nextSunday(date) {
    return (0, index_js_1.nextDay)(date, 0);
}
exports.nextSunday = nextSunday;
