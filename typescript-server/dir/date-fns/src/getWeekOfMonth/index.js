"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekOfMonth = void 0;
const index_js_1 = require("../getDate/index.js");
const index_js_2 = require("../getDay/index.js");
const index_js_3 = require("../startOfMonth/index.js");
const index_js_4 = require("../_lib/defaultOptions/index.js");
/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The week of month
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */
function getWeekOfMonth(date, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const defaultOptions = (0, index_js_4.getDefaultOptions)();
    const weekStartsOn = (_h = (_e = (_d = (_a = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _a !== void 0 ? _a : (_c = (_b = options === null || options === void 0 ? void 0 : options.locale) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.weekStartsOn) !== null && _d !== void 0 ? _d : defaultOptions.weekStartsOn) !== null && _e !== void 0 ? _e : (_g = (_f = defaultOptions.locale) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.weekStartsOn) !== null && _h !== void 0 ? _h : 0;
    const currentDayOfMonth = (0, index_js_1.getDate)(date);
    if (isNaN(currentDayOfMonth))
        return NaN;
    const startWeekDay = (0, index_js_2.getDay)((0, index_js_3.startOfMonth)(date));
    let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
    if (lastDayOfFirstWeek <= 0)
        lastDayOfFirstWeek += 7;
    const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
    return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}
exports.getWeekOfMonth = getWeekOfMonth;
