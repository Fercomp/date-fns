"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDay = void 0;
const index_js_1 = require("../addDays/index.js");
const index_js_2 = require("../toDate/index.js");
const index_js_3 = require("../_lib/defaultOptions/index.js");
/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param day - The day of the week of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the day of the week set
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * const result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * const result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(date, day, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const defaultOptions = (0, index_js_3.getDefaultOptions)();
    const weekStartsOn = (_h = (_e = (_d = (_a = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _a !== void 0 ? _a : (_c = (_b = options === null || options === void 0 ? void 0 : options.locale) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.weekStartsOn) !== null && _d !== void 0 ? _d : defaultOptions.weekStartsOn) !== null && _e !== void 0 ? _e : (_g = (_f = defaultOptions.locale) === null || _f === void 0 ? void 0 : _f.options) === null || _g === void 0 ? void 0 : _g.weekStartsOn) !== null && _h !== void 0 ? _h : 0;
    const _date = (0, index_js_2.toDate)(date);
    const currentDay = _date.getDay();
    const remainder = day % 7;
    const dayIndex = (remainder + 7) % 7;
    const delta = 7 - weekStartsOn;
    const diff = day < 0 || day > 6
        ? day - ((currentDay + delta) % 7)
        : ((dayIndex + delta) % 7) - ((currentDay + delta) % 7);
    return (0, index_js_1.addDays)(_date, diff);
}
exports.setDay = setDay;
