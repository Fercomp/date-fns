"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("endOfWeek", () => {
    (0, vitest_1.it)("returns the date with the time set to 23:59:59:999 and the date set to the last day of a week", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.endOfWeek)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.endOfWeek)(date, { weekStartsOn: 1 });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week in locale", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.endOfWeek)(date, {
            locale: {
                options: { weekStartsOn: 1 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.endOfWeek)(date, {
            weekStartsOn: 1,
            locale: {
                options: { weekStartsOn: 0 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
        const result = (0, index_js_1.endOfWeek)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        (0, index_js_1.endOfWeek)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.describe)("when the given day is before the start of a week", () => {
            (0, vitest_1.it)("it returns the end of a week", () => {
                const date = new Date(2014, 9 /* Oct */, 6);
                const result = (0, index_js_1.endOfWeek)(date, { weekStartsOn: 3 });
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 9 /* Oct */, 7, 23, 59, 59, 999));
            });
        });
        (0, vitest_1.describe)("when the given day is the start of a week", () => {
            (0, vitest_1.it)("it returns the end of a week", () => {
                const date = new Date(2014, 9 /* Oct */, 8);
                const result = (0, index_js_1.endOfWeek)(date, { weekStartsOn: 3 });
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999));
            });
        });
        (0, vitest_1.describe)("when the given day is after the start of a week", () => {
            (0, vitest_1.it)("it returns the end of a week", () => {
                const date = new Date(2014, 9 /* Oct */, 10);
                const result = (0, index_js_1.endOfWeek)(date, { weekStartsOn: 3 });
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999));
            });
        });
        (0, vitest_1.it)("handles the week at the end of a year", () => {
            const date = new Date(2014, 11 /* Dec */, 29);
            const result = (0, index_js_1.endOfWeek)(date, { weekStartsOn: 5 });
            (0, vitest_1.expect)(result).toEqual(new Date(2015, 0 /* Jan */, 1, 23, 59, 59, 999));
        });
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.endOfWeek)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
