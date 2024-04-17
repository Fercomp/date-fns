"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundToNearestMinutes = void 0;
const index_js_1 = require("../_lib/getRoundingMethod/index.js");
const index_js_2 = require("../constructFrom/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to round
 * @param options - An object with options.
 *
 * @returns The new date rounded to the closest minute
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest quarter hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * //=> Thu Jul 10 2014 12:15:00
 *
 * @example
 * // Floor (rounds down) 10 July 2014 12:12:34 to nearest minute:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'floor' })
 * //=> Thu Jul 10 2014 12:12:00
 *
 * @example
 * // Ceil (rounds up) 10 July 2014 12:12:34 to nearest half hour:
 * const result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { roundingMethod: 'ceil', nearestTo: 30 })
 * //=> Thu Jul 10 2014 12:30:00
 */
function roundToNearestMinutes(date, options) {
    var _a, _b;
    const nearestTo = (_a = options === null || options === void 0 ? void 0 : options.nearestTo) !== null && _a !== void 0 ? _a : 1;
    if (nearestTo < 1 || nearestTo > 30)
        return (0, index_js_2.constructFrom)(date, NaN);
    const _date = (0, index_js_3.toDate)(date);
    const fractionalSeconds = _date.getSeconds() / 60;
    const fractionalMilliseconds = _date.getMilliseconds() / 1000 / 60;
    const minutes = _date.getMinutes() + fractionalSeconds + fractionalMilliseconds;
    // Unlike the `differenceIn*` functions, the default rounding behavior is `round` and not 'trunc'
    const method = (_b = options === null || options === void 0 ? void 0 : options.roundingMethod) !== null && _b !== void 0 ? _b : "round";
    const roundingMethod = (0, index_js_1.getRoundingMethod)(method);
    const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
    const result = (0, index_js_2.constructFrom)(date, _date);
    result.setMinutes(roundedMinutes, 0, 0);
    return result;
}
exports.roundToNearestMinutes = roundToNearestMinutes;
