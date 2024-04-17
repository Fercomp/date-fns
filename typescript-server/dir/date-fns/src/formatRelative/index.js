"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelative = void 0;
const index_js_1 = require("../differenceInCalendarDays/index.js");
const index_js_2 = require("../format/index.js");
const index_js_3 = require("../toDate/index.js");
const index_js_4 = require("../_lib/defaultLocale/index.js");
const index_js_5 = require("../_lib/defaultOptions/index.js");
/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to format
 * @param baseDate - The date to compare with
 * @param options - An object with options
 *
 * @returns The date in words
 *
 * @throws `date` must not be Invalid Date
 * @throws `baseDate` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(subDays(new Date(), 6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
function formatRelative(date, baseDate, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const _date = (0, index_js_3.toDate)(date);
    const _baseDate = (0, index_js_3.toDate)(baseDate);
    const defaultOptions = (0, index_js_5.getDefaultOptions)();
    const locale = (_b = (_a = options === null || options === void 0 ? void 0 : options.locale) !== null && _a !== void 0 ? _a : defaultOptions.locale) !== null && _b !== void 0 ? _b : index_js_4.defaultLocale;
    const weekStartsOn = (_k = (_g = (_f = (_c = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _c !== void 0 ? _c : (_e = (_d = options === null || options === void 0 ? void 0 : options.locale) === null || _d === void 0 ? void 0 : _d.options) === null || _e === void 0 ? void 0 : _e.weekStartsOn) !== null && _f !== void 0 ? _f : defaultOptions.weekStartsOn) !== null && _g !== void 0 ? _g : (_j = (_h = defaultOptions.locale) === null || _h === void 0 ? void 0 : _h.options) === null || _j === void 0 ? void 0 : _j.weekStartsOn) !== null && _k !== void 0 ? _k : 0;
    const diff = (0, index_js_1.differenceInCalendarDays)(_date, _baseDate);
    if (isNaN(diff)) {
        throw new RangeError("Invalid time value");
    }
    let token;
    if (diff < -6) {
        token = "other";
    }
    else if (diff < -1) {
        token = "lastWeek";
    }
    else if (diff < 0) {
        token = "yesterday";
    }
    else if (diff < 1) {
        token = "today";
    }
    else if (diff < 2) {
        token = "tomorrow";
    }
    else if (diff < 7) {
        token = "nextWeek";
    }
    else {
        token = "other";
    }
    const formatStr = locale.formatRelative(token, _date, _baseDate, {
        locale,
        weekStartsOn,
    });
    return (0, index_js_2.format)(_date, formatStr, { locale, weekStartsOn });
}
exports.formatRelative = formatRelative;
