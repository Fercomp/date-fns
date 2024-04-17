"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const tzOffsetTransitions_js_1 = require("../../test/dst/tzOffsetTransitions.js");
(0, vitest_1.describe)("addMonths", () => {
    (0, vitest_1.it)("adds the given number of months", () => {
        const result = (0, index_js_1.addMonths)(new Date(2014, 8 /* Sep */, 1), 5);
        (0, vitest_1.expect)(result).toEqual(new Date(2015, 1 /* Feb */, 1));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.addMonths)(new Date(2014, 8 /* Sep */, 1).getTime(), 12);
        (0, vitest_1.expect)(result).toEqual(new Date(2015, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.addMonths)(date, 12);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
        const date = new Date(2014, 11 /* Dec */, 31);
        const result = (0, index_js_1.addMonths)(date, 2);
        (0, vitest_1.expect)(result).toEqual(new Date(2015, 1 /* Feb */, 28));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(0, 0 /* Jan */, 31);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(0, 1 /* Feb */, 29);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.addMonths)(initialDate, 1);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.addMonths)(new Date(NaN), 5);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.addMonths)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    const dstTransitions = (0, tzOffsetTransitions_js_1.getDstTransitions)(2017);
    const dstOnly = dstTransitions.start && dstTransitions.end ? vitest_1.it : vitest_1.it.skip;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
    const HOUR = 1000 * 60 * 60;
    const override = (base, year = base.getFullYear(), month = base.getMonth(), day = base.getDate(), hour = base.getHours(), minute = base.getMinutes()) => new Date(year, month, day, hour, minute);
    dstOnly(`works at DST-start boundary in local timezone: ${tz || "(unknown)"}`, () => {
        const date = dstTransitions.start;
        const result = (0, index_js_1.addMonths)(date, 2);
        (0, vitest_1.expect)(result).toEqual(override(date, date.getFullYear(), date.getMonth() + 2));
    });
    dstOnly(`works at DST-start - 30 mins in local timezone: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.start.getTime() - 0.5 * HOUR);
        const result = (0, index_js_1.addMonths)(date, 2);
        const expected = override(date, date.getFullYear(), date.getMonth() + 2);
        (0, vitest_1.expect)(result).toEqual(expected);
    });
    dstOnly(`works at DST-start - 60 mins in local timezone: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.start.getTime() - 1 * HOUR);
        const result = (0, index_js_1.addMonths)(date, 2);
        const expected = override(date, date.getFullYear(), date.getMonth() + 2);
        (0, vitest_1.expect)(result).toEqual(expected);
    });
    dstOnly(`works at DST-end boundary in local timezone: ${tz || "(unknown)"}`, () => {
        const date = dstTransitions.end;
        const result = (0, index_js_1.addMonths)(date, 2);
        (0, vitest_1.expect)(result).toEqual(override(date, date.getFullYear() + (date.getMonth() >= 10 ? 1 : 0), (date.getMonth() + 2) % 12));
    });
    dstOnly(`works at DST-end - 30 mins in local timezone: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.end.getTime() - 0.5 * HOUR);
        const result = (0, index_js_1.addMonths)(date, 2);
        (0, vitest_1.expect)(result).toEqual(override(date, date.getFullYear() + (date.getMonth() >= 10 ? 1 : 0), (date.getMonth() + 2) % 12));
    });
    dstOnly(`works at DST-end - 60 mins in local timezone: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.end.getTime() - 1 * HOUR);
        const result = (0, index_js_1.addMonths)(date, 2);
        (0, vitest_1.expect)(result).toEqual(override(date, date.getFullYear() + (date.getMonth() >= 10 ? 1 : 0), (date.getMonth() + 2) % 12));
    });
    dstOnly(`doesn't mutate if zero increment is used: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.end);
        const result = (0, index_js_1.addMonths)(date, 0);
        (0, vitest_1.expect)(result).toEqual(date);
    });
});
