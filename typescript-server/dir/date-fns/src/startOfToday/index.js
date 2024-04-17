"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOfToday = void 0;
const index_js_1 = require("../startOfDay/index.js");
/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * @returns The start of today
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday() {
    return (0, index_js_1.startOfDay)(Date.now());
}
exports.startOfToday = startOfToday;
