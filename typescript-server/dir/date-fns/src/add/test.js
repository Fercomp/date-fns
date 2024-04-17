"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const tzOffsetTransitions_js_1 = require("../../test/dst/tzOffsetTransitions.js");
(0, vitest_1.describe)("add", () => {
    (0, vitest_1.it)("adds the values from the given object", () => {
        const result = (0, index_js_1.add)(new Date(2014, 8 /* Sep */, 1, 10, 19, 50), {
            years: 2,
            months: 9,
            weeks: 1,
            days: 7,
            hours: 5,
            minutes: 9,
            seconds: 30,
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2017, 5 /* June */, 15, 15, 29, 20));
    });
    (0, vitest_1.it)("supports an undefined value in the duration object", () => {
        const result = (0, index_js_1.add)(new Date(2014, 8 /* Sep */, 1, 10, 19, 50), {
            years: undefined,
            months: 9,
            weeks: 1,
            days: 7,
            hours: 5,
            minutes: 9,
            seconds: 30,
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2015, 5 /* June */, 15, 15, 29, 20));
    });
    (0, vitest_1.it)("returns same date object when passed empty duration values", () => {
        const result = (0, index_js_1.add)(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {
            years: undefined,
            months: undefined,
            weeks: undefined,
            days: undefined,
            hours: undefined,
            minutes: undefined,
            seconds: undefined,
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 10));
    });
    (0, vitest_1.it)("returns same date object when passed undefined duration values", () => {
        const result = (0, index_js_1.add)(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {});
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 10));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.add)(new Date(2014, 8 /* Sep */, 1, 10).getTime(), {
            hours: 4,
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 14));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1, 10);
        (0, index_js_1.add)(date, { hours: 4 });
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1, 10));
    });
    (0, vitest_1.it)("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
        const date = new Date(2014, 11 /* Dec */, 31);
        const result = (0, index_js_1.add)(date, { months: 9 });
        (0, vitest_1.expect)(result).toEqual(new Date(2015, 8 /* Sep */, 30));
    });
    const dstTransitions = (0, tzOffsetTransitions_js_1.getDstTransitions)(2017);
    const dstOnly = dstTransitions.start && dstTransitions.end ? vitest_1.it : vitest_1.it.skip;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
    const HOUR = 1000 * 60 * 60;
    dstOnly(`works at DST-end boundary in local timezone: ${tz || "(unknown)"}`, () => {
        const date = dstTransitions.end;
        const result = (0, index_js_1.add)(date, { hours: 1 });
        (0, vitest_1.expect)(result).toEqual(new Date(date.getTime() + HOUR));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(-1, 10 /* Nov */, 30);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(0, 1 /* Feb */, 29);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.add)(initialDate, { months: 3 });
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.add)(new Date(NaN), { hours: 5 });
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
