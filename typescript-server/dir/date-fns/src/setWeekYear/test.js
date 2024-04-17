"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setWeekYear", () => {
    (0, vitest_1.it)("sets the local week-numbering year, saving the week and the day of the week", () => {
        const result = (0, index_js_1.setWeekYear)(new Date(2010, 0 /* Jan */, 2), 2004);
        (0, vitest_1.expect)(result).toEqual(new Date(2004, 0 /* Jan */, 3));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setWeekYear)(new Date(2008, 11 /* Dec */, 29).getTime(), 2007);
        (0, vitest_1.expect)(result).toEqual(new Date(2007, 0 /* Jan */, 1));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2008, 11 /* Dec */, 29);
        (0, index_js_1.setWeekYear)(date, 2000);
        (0, vitest_1.expect)(date).toEqual(new Date(2008, 11 /* Dec */, 29));
    });
    (0, vitest_1.it)("sets local week-numbering years less than 100", () => {
        const initialDate = new Date(2008, 11 /* Dec */, 29);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(7, 0 /* Jan */, 1);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.setWeekYear)(initialDate, 7);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(8, 11 /* Dec */, 29);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(7, 0 /* Jan */, 1);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.setWeekYear)(initialDate, 7);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setWeekYear)(new Date(NaN), 2007);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getDate())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setWeekYear)(new Date(2008, 11 /* Dec */, 29), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getDate())).toBe(true);
    });
    (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
        const date = new Date(2010, 0 /* Jan */, 2);
        const result = (0, index_js_1.setWeekYear)(date, 2004, {
            locale: {
                options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2005, 0 /* Jan */, 1));
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const date = new Date(2010, 0 /* Jan */, 2);
        const result = (0, index_js_1.setWeekYear)(date, 2004, {
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: {
                options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2005, 0 /* Jan */, 1));
    });
});
