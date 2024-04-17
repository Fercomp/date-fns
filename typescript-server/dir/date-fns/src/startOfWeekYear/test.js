"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("startOfWeekYear", () => {
    (0, vitest_1.it)("returns the date with the time set to 00:00:00 and the date set to the first day of a week year", () => {
        const result = (0, index_js_1.startOfWeekYear)(new Date(2005, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toEqual(new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.startOfWeekYear)(new Date(2005, 0 /* Jan */, 1, 6, 0).getTime());
        (0, vitest_1.expect)(result).toEqual(new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 2);
        (0, index_js_1.startOfWeekYear)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 2));
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(9, 0 /* Jan */, 1);
        initialDate.setHours(0, 0, 0, 0);
        const expectedResult = new Date(0);
        expectedResult.setFullYear(8, 11 /* Dec */, 28);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.startOfWeekYear)(initialDate);
        (0, vitest_1.expect)(result).toEqual(expectedResult);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.startOfWeekYear)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
        const date = new Date(2005, 6 /* Jul */, 2);
        const result = (0, index_js_1.startOfWeekYear)(date, {
            locale: {
                options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0));
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const date = new Date(2005, 6 /* Jul */, 2);
        const result = (0, index_js_1.startOfWeekYear)(date, {
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: {
                options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0));
    });
});
