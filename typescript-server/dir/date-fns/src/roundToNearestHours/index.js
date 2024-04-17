"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundToNearestHours = void 0;
const index_js_1 = require("../_lib/getRoundingMethod/index.js");
const index_js_2 = require("../constructFrom/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name roundToNearestHours
 * @category Hour Helpers
 * @summary Rounds the given date to the nearest hour
 *
 * @description
 * Rounds the given date to the nearest hour (or number of hours).
 * Rounds up when the given date is exactly between the nearest round hours.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest hour
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56))
 * //=> Thu Jul 10 2014 13:00:00
 *
 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 6 })
 * //=> Thu Jul 10 2014 12:00:00

 * @example
 * // Round 10 July 2014 12:34:56 to nearest half hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { nearestTo: 8 })
 * //=> Thu Jul 10 2014 16:00:00

* @example
 * // Floor (rounds down) 10 July 2014 12:34:56 to nearest hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 1, 23, 45), { roundingMethod: 'ceil' })
 * //=> Thu Jul 10 2014 02:00:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:34:56 to nearest quarter hour:
 * const result = roundToNearestHours(new Date(2014, 6, 10, 12, 34, 56), { roundingMethod: 'floor', nearestTo: 8 })
 * //=> Thu Jul 10 2014 08:00:00
 */
function roundToNearestHours(date, options) {
    var _a, _b;
    const nearestTo = (_a = options === null || options === void 0 ? void 0 : options.nearestTo) !== null && _a !== void 0 ? _a : 1;
    if (nearestTo < 1 || nearestTo > 12)
        return (0, index_js_2.constructFrom)(date, NaN);
    const _date = (0, index_js_3.toDate)(date);
    const fractionalMinutes = _date.getMinutes() / 60;
    const fractionalSeconds = _date.getSeconds() / 60 / 60;
    const fractionalMilliseconds = _date.getMilliseconds() / 1000 / 60 / 60;
    const hours = _date.getHours() +
        fractionalMinutes +
        fractionalSeconds +
        fractionalMilliseconds;
    // Unlike the `differenceIn*` functions, the default rounding behavior is `round` and not 'trunc'
    const method = (_b = options === null || options === void 0 ? void 0 : options.roundingMethod) !== null && _b !== void 0 ? _b : "round";
    const roundingMethod = (0, index_js_1.getRoundingMethod)(method);
    // nearestTo option does not care daylight savings time
    const roundedHours = roundingMethod(hours / nearestTo) * nearestTo;
    const result = (0, index_js_2.constructFrom)(date, _date);
    result.setHours(roundedHours, 0, 0, 0);
    return result;
}
exports.roundToNearestHours = roundToNearestHours;
