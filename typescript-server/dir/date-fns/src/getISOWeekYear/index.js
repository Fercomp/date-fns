"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getISOWeekYear = void 0;
const index_js_1 = require("../constructFrom/index.js");
const index_js_2 = require("../startOfISOWeek/index.js");
const index_js_3 = require("../toDate/index.js");
/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
    const _date = (0, index_js_3.toDate)(date);
    const year = _date.getFullYear();
    const fourthOfJanuaryOfNextYear = (0, index_js_1.constructFrom)(date, 0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    const startOfNextYear = (0, index_js_2.startOfISOWeek)(fourthOfJanuaryOfNextYear);
    const fourthOfJanuaryOfThisYear = (0, index_js_1.constructFrom)(date, 0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    const startOfThisYear = (0, index_js_2.startOfISOWeek)(fourthOfJanuaryOfThisYear);
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
exports.getISOWeekYear = getISOWeekYear;
