"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeekend = void 0;
const index_js_1 = require("../toDate/index.js");
const index_js_2 = require("../_lib/defaultOptions/index.js");
/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend(date, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const day = (0, index_js_1.toDate)(date).getDay();
    const defaultOptions = (0, index_js_2.getDefaultOptions)();
    const weekendDays = (_h = (_e = (_d = (_a = options === null || options === void 0 ? void 0 : options.weekendDays) !== null && _a !== void 0 ? _a : (_c = (_b = options === null || options === void 0 ? void 0 : options.locale) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.weekendDays) !== null && _d !== void 0 ? _d : defaultOptions.weekendDays) !== null && _e !== void 0 ? _e : (_g = (_f = defaultOptions.locale) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.weekendDays) !== null && _h !== void 0 ? _h : [0, 6];
    const aux = weekendDays;
    return aux.includes(day);
}
exports.isWeekend = isWeekend;
