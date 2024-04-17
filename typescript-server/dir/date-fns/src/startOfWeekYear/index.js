"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startOfWeekYear = void 0;
const index_js_1 = require("../constructFrom/index.js");
const index_js_2 = require("../getWeekYear/index.js");
const index_js_3 = require("../startOfWeek/index.js");
const index_js_4 = require("../_lib/defaultOptions/index.js");
/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const defaultOptions = (0, index_js_4.getDefaultOptions)();
    const firstWeekContainsDate = (_h = (_e = (_d = (_a = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _a !== void 0 ? _a : (_c = (_b = options === null || options === void 0 ? void 0 : options.locale) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.firstWeekContainsDate) !== null && _d !== void 0 ? _d : defaultOptions.firstWeekContainsDate) !== null && _e !== void 0 ? _e : (_g = (_f = defaultOptions.locale) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.firstWeekContainsDate) !== null && _h !== void 0 ? _h : 1;
    const year = (0, index_js_2.getWeekYear)(date, options);
    const firstWeek = (0, index_js_1.constructFrom)(date, 0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    const _date = (0, index_js_3.startOfWeek)(firstWeek, options);
    return _date;
}
exports.startOfWeekYear = startOfWeekYear;
