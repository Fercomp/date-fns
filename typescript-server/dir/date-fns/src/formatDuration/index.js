"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDuration = void 0;
const index_js_1 = require("../_lib/defaultLocale/index.js");
const index_js_2 = require("../_lib/defaultOptions/index.js");
const defaultFormat = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
];
/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param duration - The duration to format
 * @param options - An object with options.
 *
 * @returns The formatted date string
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */
function formatDuration(duration, options) {
    var _a, _b, _c, _d, _e;
    const defaultOptions = (0, index_js_2.getDefaultOptions)();
    const locale = (_b = (_a = options === null || options === void 0 ? void 0 : options.locale) !== null && _a !== void 0 ? _a : defaultOptions.locale) !== null && _b !== void 0 ? _b : index_js_1.defaultLocale;
    const format = (_c = options === null || options === void 0 ? void 0 : options.format) !== null && _c !== void 0 ? _c : defaultFormat;
    const zero = (_d = options === null || options === void 0 ? void 0 : options.zero) !== null && _d !== void 0 ? _d : false;
    const delimiter = (_e = options === null || options === void 0 ? void 0 : options.delimiter) !== null && _e !== void 0 ? _e : " ";
    if (!locale.formatDistance) {
        return "";
    }
    const result = format
        .reduce((acc, unit) => {
        const token = `x${unit.replace(/(^.)/, (m) => m.toUpperCase())}`;
        const value = duration[unit];
        if (value !== undefined && (zero || duration[unit])) {
            return acc.concat(locale.formatDistance(token, value));
        }
        return acc;
    }, [])
        .join(delimiter);
    return result;
}
exports.formatDuration = formatDuration;
