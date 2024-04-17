"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromUnixTime = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * @param unixTime - The given Unix timestamp (in seconds)
 *
 * @returns The date
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */
function fromUnixTime(unixTime) {
    return (0, index_js_1.toDate)(unixTime * 1000);
}
exports.fromUnixTime = fromUnixTime;
