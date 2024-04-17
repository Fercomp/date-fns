"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRFC7231 = void 0;
const index_js_1 = require("../isValid/index.js");
const index_js_2 = require("../toDate/index.js");
const index_js_3 = require("../_lib/addLeadingZeros/index.js");
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */
function formatRFC7231(date) {
    const _date = (0, index_js_2.toDate)(date);
    if (!(0, index_js_1.isValid)(_date)) {
        throw new RangeError("Invalid time value");
    }
    const dayName = days[_date.getUTCDay()];
    const dayOfMonth = (0, index_js_3.addLeadingZeros)(_date.getUTCDate(), 2);
    const monthName = months[_date.getUTCMonth()];
    const year = _date.getUTCFullYear();
    const hour = (0, index_js_3.addLeadingZeros)(_date.getUTCHours(), 2);
    const minute = (0, index_js_3.addLeadingZeros)(_date.getUTCMinutes(), 2);
    const second = (0, index_js_3.addLeadingZeros)(_date.getUTCSeconds(), 2);
    // Result variables.
    return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`;
}
exports.formatRFC7231 = formatRFC7231;
