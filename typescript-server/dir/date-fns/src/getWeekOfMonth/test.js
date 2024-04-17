"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getWeekOfMonth", () => {
    (0, vitest_1.it)("returns the week of the month of the given date", () => {
        const result = (0, index_js_1.getWeekOfMonth)(new Date(2017, 10 /* Nov */, 15));
        (0, vitest_1.expect)(result).toBe(3);
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.describe)("when the given day is the first of a month", () => {
            (0, vitest_1.it)("returns the week of the month of the given date", () => {
                const result = (0, index_js_1.getWeekOfMonth)(new Date(2017, 10 /* Nov */, 1));
                (0, vitest_1.expect)(result).toBe(1);
            });
        });
        (0, vitest_1.describe)("when the given day is the last of a month #1", () => {
            (0, vitest_1.it)("returns the week of the month of the given date", () => {
                const result = (0, index_js_1.getWeekOfMonth)(new Date(2017, 10 /* Nov */, 30));
                (0, vitest_1.expect)(result).toBe(5);
            });
        });
        (0, vitest_1.describe)("when the given day is the last of a month #2", () => {
            (0, vitest_1.it)("returns the week of the month of the given date", () => {
                const result = (0, index_js_1.getWeekOfMonth)(new Date(2017, 9 /* Oct */, 31));
                (0, vitest_1.expect)(result).toBe(5);
            });
        });
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
        const result = (0, index_js_1.getWeekOfMonth)(new Date(2017, 9 /* Oct */, 1), {
            weekStartsOn: 1,
        });
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week in locale", () => {
        const result = (0, index_js_1.getWeekOfMonth)(new Date(2017, 9 /* Oct */, 31), {
            locale: {
                options: { weekStartsOn: 1 },
            },
        });
        (0, vitest_1.expect)(result).toBe(6);
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const result = (0, index_js_1.getWeekOfMonth)(new Date(2017, 10 /* Nov */, 13), {
            weekStartsOn: 1,
            locale: {
                options: { weekStartsOn: 0 },
            },
        });
        (0, vitest_1.expect)(result).toBe(3);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getWeekOfMonth)(new Date(2017, 10 /* Nov */, 1).getTime());
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getWeekOfMonth)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns the week of the month of the given date, when the given date is sunday", () => {
        const result = (0, index_js_1.getWeekOfMonth)(new Date(2019, 4 /* May */, 5), {
            weekStartsOn: 1,
        });
        (0, vitest_1.expect)(result).toBe(1);
    });
});
