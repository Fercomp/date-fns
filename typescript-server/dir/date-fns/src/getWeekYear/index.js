"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekYear = void 0;
const index_js_1 = require("../constructFrom/index.js");
const index_js_2 = require("../startOfWeek/index.js");
const index_js_3 = require("../toDate/index.js");
const index_js_4 = require("../_lib/defaultOptions/index.js");
/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const _date = (0, index_js_3.toDate)(date);
    const year = _date.getFullYear();
    const defaultOptions = (0, index_js_4.getDefaultOptions)();
    const firstWeekContainsDate = (_h = (_e = (_d = (_a = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _a !== void 0 ? _a : (_c = (_b = options === null || options === void 0 ? void 0 : options.locale) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.firstWeekContainsDate) !== null && _d !== void 0 ? _d : defaultOptions.firstWeekContainsDate) !== null && _e !== void 0 ? _e : (_g = (_f = defaultOptions.locale) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.firstWeekContainsDate) !== null && _h !== void 0 ? _h : 1;
    const firstWeekOfNextYear = (0, index_js_1.constructFrom)(date, 0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, index_js_2.startOfWeek)(firstWeekOfNextYear, options);
    const firstWeekOfThisYear = (0, index_js_1.constructFrom)(date, 0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, index_js_2.startOfWeek)(firstWeekOfThisYear, options);
    if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
    }
    else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
    }
    else {
        return year - 1;
    }
}
exports.getWeekYear = getWeekYear;
