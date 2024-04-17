"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("lastDayOfISOWeekYear", () => {
    (0, vitest_1.it)("returns the date with the time set to 00:00:00 and the date set to the last day of an ISO year", () => {
        const result = (0, index_js_1.lastDayOfISOWeekYear)(new Date(2009, 0 /* Jan */, 1, 16, 0));
        (0, vitest_1.expect)(result).toEqual(new Date(2010, 0 /* Jan */, 3));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.lastDayOfISOWeekYear)(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime());
        (0, vitest_1.expect)(result).toEqual(new Date(2005, 0 /* Jan */, 2));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 2);
        (0, index_js_1.lastDayOfISOWeekYear)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 2));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(5, 0 /* Jan */, 4);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(6, 0 /* Jan */, 1);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.lastDayOfISOWeekYear)(initialDate);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.lastDayOfISOWeekYear)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
