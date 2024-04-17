"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("addISOWeekYears", () => {
    (0, vitest_1.it)("adds the given number of ISO week-numbering years", () => {
        const result = (0, index_js_1.addISOWeekYears)(new Date(2010, 6 /* Jul */, 2), 5);
        (0, vitest_1.expect)(result).toEqual(new Date(2015, 5 /* Jun */, 26));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.addISOWeekYears)(new Date(2014, 8 /* Sep */, 1).getTime(), 12);
        (0, vitest_1.expect)(result).toEqual(new Date(2026, 7 /* Aug */, 31));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.addISOWeekYears)(date, 12);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(10, 6 /* Jul */, 2);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(15, 5 /* Jun */, 26);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.addISOWeekYears)(initialDate, 5);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.addISOWeekYears)(new Date(NaN), 5);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.addISOWeekYears)(new Date(2010, 6 /* Jul */, 2), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
