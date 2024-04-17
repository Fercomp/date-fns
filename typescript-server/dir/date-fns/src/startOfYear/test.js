"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("startOfYear", () => {
    (0, vitest_1.it)("returns the date with the time set to 00:00:00 and the date set to the first day of a year", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.startOfYear)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 1, 0, 0, 0, 0));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
        const result = (0, index_js_1.startOfYear)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Dec */, 1, 0, 0, 0, 0));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        (0, index_js_1.startOfYear)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(9, 0 /* Jan */, 5);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(9, 0 /* Jan */, 1);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.startOfYear)(initialDate);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.startOfYear)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
