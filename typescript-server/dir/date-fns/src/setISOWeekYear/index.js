"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setISOWeekYear = void 0;
const index_js_1 = require("../constructFrom/index.js");
const index_js_2 = require("../differenceInCalendarDays/index.js");
const index_js_3 = require("../startOfISOWeekYear/index.js");
const index_js_4 = require("../toDate/index.js");
/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param weekYear - The ISO week-numbering year of the new date
 *
 * @returns The new date with the ISO week-numbering year set
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOWeekYear(date, weekYear) {
    let _date = (0, index_js_4.toDate)(date);
    const diff = (0, index_js_2.differenceInCalendarDays)(_date, (0, index_js_3.startOfISOWeekYear)(_date));
    const fourthOfJanuary = (0, index_js_1.constructFrom)(date, 0);
    fourthOfJanuary.setFullYear(weekYear, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    _date = (0, index_js_3.startOfISOWeekYear)(fourthOfJanuary);
    _date.setDate(_date.getDate() + diff);
    return _date;
}
exports.setISOWeekYear = setISOWeekYear;
