"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatISO = void 0;
const index_js_1 = require("../toDate/index.js");
const index_js_2 = require("../_lib/addLeadingZeros/index.js");
/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options.
 *
 * @returns The formatted date string (in loca.l time zone)
 *
 * @throws `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */
function formatISO(date, options) {
    var _a, _b;
    const _date = (0, index_js_1.toDate)(date);
    if (isNaN(_date.getTime())) {
        throw new RangeError("Invalid time value");
    }
    const format = (_a = options === null || options === void 0 ? void 0 : options.format) !== null && _a !== void 0 ? _a : "extended";
    const representation = (_b = options === null || options === void 0 ? void 0 : options.representation) !== null && _b !== void 0 ? _b : "complete";
    let result = "";
    let tzOffset = "";
    const dateDelimiter = format === "extended" ? "-" : "";
    const timeDelimiter = format === "extended" ? ":" : "";
    // Representation is either 'date' or 'complete'
    if (representation !== "time") {
        const day = (0, index_js_2.addLeadingZeros)(_date.getDate(), 2);
        const month = (0, index_js_2.addLeadingZeros)(_date.getMonth() + 1, 2);
        const year = (0, index_js_2.addLeadingZeros)(_date.getFullYear(), 4);
        // yyyyMMdd or yyyy-MM-dd.
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
    }
    // Representation is either 'time' or 'complete'
    if (representation !== "date") {
        // Add the timezone.
        const offset = _date.getTimezoneOffset();
        if (offset !== 0) {
            const absoluteOffset = Math.abs(offset);
            const hourOffset = (0, index_js_2.addLeadingZeros)(Math.trunc(absoluteOffset / 60), 2);
            const minuteOffset = (0, index_js_2.addLeadingZeros)(absoluteOffset % 60, 2);
            // If less than 0, the sign is +, because it is ahead of time.
            const sign = offset < 0 ? "+" : "-";
            tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
        }
        else {
            tzOffset = "Z";
        }
        const hour = (0, index_js_2.addLeadingZeros)(_date.getHours(), 2);
        const minute = (0, index_js_2.addLeadingZeros)(_date.getMinutes(), 2);
        const second = (0, index_js_2.addLeadingZeros)(_date.getSeconds(), 2);
        // If there's also date, separate it with time with 'T'
        const separator = result === "" ? "" : "T";
        // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
        const time = [hour, minute, second].join(timeDelimiter);
        // HHmmss or HH:mm:ss.
        result = `${result}${separator}${time}${tzOffset}`;
    }
    return result;
}
exports.formatISO = formatISO;
