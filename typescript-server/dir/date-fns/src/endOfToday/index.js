"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOfToday = void 0;
const index_js_1 = require("../endOfDay/index.js");
/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The end of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
function endOfToday() {
    return (0, index_js_1.endOfDay)(Date.now());
}
exports.endOfToday = endOfToday;
