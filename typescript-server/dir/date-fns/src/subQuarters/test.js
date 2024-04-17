"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("subQuarters", () => {
    (0, vitest_1.it)("subtracts the given number of quarters", () => {
        const result = (0, index_js_1.subQuarters)(new Date(2014, 8 /* Sep */, 1), 3);
        (0, vitest_1.expect)(result).toEqual(new Date(2013, 11 /* Dec */, 1));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.subQuarters)(new Date(2014, 8 /* Sep */, 1).getTime(), 4);
        (0, vitest_1.expect)(result).toEqual(new Date(2013, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.subQuarters)(date, 3);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
        const date = new Date(2014, 11 /* Dec */, 31);
        const result = (0, index_js_1.subQuarters)(date, 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 30));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(0, 10 /* Nov */, 30);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(0, 1 /* Feb */, 29);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.subQuarters)(initialDate, 3);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.subQuarters)(new Date(NaN), 3);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.subQuarters)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
