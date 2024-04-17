"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endOfISOWeekYear = void 0;
const index_js_1 = require("../getISOWeekYear/index.js");
const index_js_2 = require("../startOfISOWeek/index.js");
const index_js_3 = require("../constructFrom/index.js");
/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
function endOfISOWeekYear(date) {
    const year = (0, index_js_1.getISOWeekYear)(date);
    const fourthOfJanuaryOfNextYear = (0, index_js_3.constructFrom)(date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const _date = (0, index_js_2.startOfISOWeek)(fourthOfJanuaryOfNextYear);
    _date.setMilliseconds(_date.getMilliseconds() - 1);
    return _date;
}
exports.endOfISOWeekYear = endOfISOWeekYear;
