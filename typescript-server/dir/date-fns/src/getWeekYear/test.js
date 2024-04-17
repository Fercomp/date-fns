"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getWeekYear", () => {
    (0, vitest_1.it)("returns the local week-numbering year of the given date", () => {
        const result = (0, index_js_1.getWeekYear)(new Date(2004, 11 /* Dec */, 26));
        (0, vitest_1.expect)(result).toBe(2005);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getWeekYear)(new Date(2000, 11 /* Dec */, 30).getTime());
        (0, vitest_1.expect)(result).toBe(2000);
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(7, 11 /* Dec */, 31);
        initialDate.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.getWeekYear)(initialDate);
        (0, vitest_1.expect)(result).toBe(8);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getWeekYear)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
        const date = new Date(2004, 11 /* Dec */, 26);
        const result = (0, index_js_1.getWeekYear)(date, {
            locale: {
                options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
            },
        });
        (0, vitest_1.expect)(result).toBe(2004);
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const date = new Date(2004, 11 /* Dec */, 26);
        const result = (0, index_js_1.getWeekYear)(date, {
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: {
                options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
            },
        });
        (0, vitest_1.expect)(result).toBe(2004);
    });
});
