"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.interval = void 0;
const index_js_1 = require("../toDate/index.js");
/**
 * @name interval
 * @category Interval Helpers
 * @summary Creates an interval object and validates its values.
 *
 * @description
 * Creates a normalized interval object and validates its values. If the interval is invalid, an exception is thrown.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param start - The start of the interval.
 * @param end - The end of the interval.
 * @param options - The options object.
 *
 * @throws `Start date is invalid` when `start` is invalid.
 * @throws `End date is invalid` when `end` is invalid.
 * @throws `End date must be after start date` when end is before `start` and `options.assertPositive` is true.
 *
 * @returns The normalized and validated interval object.
 */
function interval(start, end, options) {
    const _start = (0, index_js_1.toDate)(start);
    if (isNaN(+_start))
        throw new TypeError("Start date is invalid");
    const _end = (0, index_js_1.toDate)(end);
    if (isNaN(+_end))
        throw new TypeError("End date is invalid");
    if ((options === null || options === void 0 ? void 0 : options.assertPositive) && +_start > +_end)
        throw new TypeError("End date must be after start date");
    return { start: _start, end: _end };
}
exports.interval = interval;
