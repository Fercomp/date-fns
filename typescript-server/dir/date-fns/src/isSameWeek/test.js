"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isSameWeek", () => {
    (0, vitest_1.it)("returns true if the given dates have the same week", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given dates have different weeks", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(2014, 7 /* Aug */, 30), new Date(2014, 8 /* Sep */, 4));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4), { weekStartsOn: 1 });
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week in locale", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4), {
            locale: {
                options: { weekStartsOn: 1 },
            },
        });
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4), {
            weekStartsOn: 1,
            locale: {
                options: { weekStartsOn: 0 },
            },
        });
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(2014, 7 /* Aug */, 31).getTime(), new Date(2014, 8 /* Sep */, 4).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.isSameWeek)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
