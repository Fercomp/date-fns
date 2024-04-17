"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setMonth", () => {
    (0, vitest_1.it)("sets the month", () => {
        const result = (0, index_js_1.setMonth)(new Date(2014, 8 /* Sep */, 1), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 1));
    });
    (0, vitest_1.it)("sets the last day of the month if the original date was the last day of a longer month", () => {
        const result = (0, index_js_1.setMonth)(new Date(2014, 11 /* Dec */, 31), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 28));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setMonth)(new Date(2014, 8 /* Sep */, 1).getTime(), 11);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 11 /* Dec */, 1));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.setMonth)(date, 5);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(0, 11 /* Dec */, 31);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(0, 1 /* Feb */, 29);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.setMonth)(initialDate, 1);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setMonth)(new Date(NaN), 1);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setMonth)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
