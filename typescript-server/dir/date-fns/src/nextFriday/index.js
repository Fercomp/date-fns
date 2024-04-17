"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextFriday = void 0;
const index_js_1 = require("../nextDay/index.js");
/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to start counting from
 *
 * @returns The next Friday
 *
 * @example
 * // When is the next Friday after Mar, 22, 2020?
 * const result = nextFriday(new Date(2020, 2, 22))
 * //=> Fri Mar 27 2020 00:00:00
 */
function nextFriday(date) {
    return (0, index_js_1.nextDay)(date, 5);
}
exports.nextFriday = nextFriday;
