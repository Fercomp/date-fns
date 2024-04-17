"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setQuarter", () => {
    (0, vitest_1.it)("sets the quarter of the year", () => {
        const result = (0, index_js_1.setQuarter)(new Date(2014, 6 /* Jul */, 2), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 2));
    });
    (0, vitest_1.it)("sets the last day of the month if the original date was the last day of a longer month", () => {
        const result = (0, index_js_1.setQuarter)(new Date(2014, 10 /* Nov */, 30), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 28));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setQuarter)(new Date(2014, 6 /* Jul */, 1).getTime(), 4);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 9 /* Oct */, 1));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 1);
        (0, index_js_1.setQuarter)(date, 2);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 1));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(0, 10 /* Nov */, 30);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(0, 1 /* Feb */, 29);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.setQuarter)(initialDate, 1);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setQuarter)(new Date(NaN), 1);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setQuarter)(new Date(2014, 6 /* Jul */, 2), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
