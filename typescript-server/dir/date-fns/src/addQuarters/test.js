"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("addQuarters", () => {
    (0, vitest_1.it)("adds the given number of quarters", () => {
        const result = (0, index_js_1.addQuarters)(new Date(2014, 8 /* Sep */, 1), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 11 /* Dec */, 1));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.addQuarters)(new Date(2014, 8 /* Sep */, 1).getTime(), 4);
        (0, vitest_1.expect)(result).toEqual(new Date(2015, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.addQuarters)(date, 4);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
        const date = new Date(2014, 11 /* Dec */, 31);
        const result = (0, index_js_1.addQuarters)(date, 3);
        (0, vitest_1.expect)(result).toEqual(new Date(2015, 8 /* Sep */, 30));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(-1, 10 /* Nov */, 30);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(0, 1 /* Feb */, 29);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.addQuarters)(initialDate, 1);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.addQuarters)(new Date(NaN), 1);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.addQuarters)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
