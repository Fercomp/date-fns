"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getWeek", () => {
    (0, vitest_1.it)("returns the local week of year of the given date", () => {
        const result = (0, index_js_1.getWeek)(new Date(2005, 0 /* Jan */, 2));
        (0, vitest_1.expect)(result).toBe(2);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getWeek)(new Date(2008, 11 /* Dec */, 29).getTime());
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(7, 11 /* Dec */, 30);
        initialDate.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.getWeek)(initialDate);
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.getWeek)(new Date(2005, 0 /* Jan */, 4))).toBe(2);
        // Calendars repeat every 400 years
        (0, vitest_1.expect)((0, index_js_1.getWeek)(new Date(395, 0 /* Jan */, 4))).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.getWeek)(new Date(-2005, 0 /* Jan */, 4))).toBe(1);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getWeek)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
        const date = new Date(2005, 0 /* Jan */, 2);
        const result = (0, index_js_1.getWeek)(date, {
            locale: {
                options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
            },
        });
        (0, vitest_1.expect)(result).toBe(53);
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const date = new Date(2005, 0 /* Jan */, 2);
        const result = (0, index_js_1.getWeek)(date, {
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: {
                options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
            },
        });
        (0, vitest_1.expect)(result).toBe(53);
    });
});
