"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closestTo = void 0;
const index_js_1 = require("../constructFrom/index.js");
const index_js_2 = require("../toDate/index.js");
/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns The date from the array closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo(dateToCompare, dates) {
    const date = (0, index_js_2.toDate)(dateToCompare);
    if (isNaN(Number(date)))
        return (0, index_js_1.constructFrom)(dateToCompare, NaN);
    const timeToCompare = date.getTime();
    let result;
    let minDistance;
    dates.forEach((dirtyDate) => {
        const currentDate = (0, index_js_2.toDate)(dirtyDate);
        if (isNaN(Number(currentDate))) {
            result = (0, index_js_1.constructFrom)(dateToCompare, NaN);
            minDistance = NaN;
            return;
        }
        const distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < minDistance) {
            result = currentDate;
            minDistance = distance;
        }
    });
    return result;
}
exports.closestTo = closestTo;
