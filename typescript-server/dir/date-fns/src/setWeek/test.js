"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setWeek", () => {
    (0, vitest_1.it)("sets the local week", () => {
        const result = (0, index_js_1.setWeek)(new Date(2005, 0 /* Jan */, 2), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2004, 11 /* Dec */, 26));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setWeek)(new Date(2009, 11 /* Dec */, 2).getTime(), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2008, 11 /* Dec */, 31));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 2);
        (0, index_js_1.setWeek)(date, 52);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 2));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(4, 0 /* Jan */, 4);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(4, 11 /* Dec */, 19);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.setWeek)(initialDate, 52);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setWeek)(new Date(NaN), 53);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setWeek)(new Date(2004, 7 /* Aug */, 7), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
        const date = new Date(2005, 0 /* Jan */, 2);
        const result = (0, index_js_1.setWeek)(date, 1, {
            locale: {
                options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2004, 0 /* Jan */, 4));
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const date = new Date(2005, 0 /* Jan */, 2);
        const result = (0, index_js_1.setWeek)(date, 1, {
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: {
                options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2004, 0 /* Jan */, 4));
    });
});
