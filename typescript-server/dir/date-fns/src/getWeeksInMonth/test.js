"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getWeeksInMonth", () => {
    (0, vitest_1.it)("returns the number of calendar weeks the month in the given date spans", () => {
        const result = (0, index_js_1.getWeeksInMonth)(new Date(2015, 1 /* Feb */, 8, 18, 0));
        (0, vitest_1.expect)(result).toBe(4);
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
        const result = (0, index_js_1.getWeeksInMonth)(new Date(2015, 1 /* Feb */, 8, 18, 0), {
            weekStartsOn: 1,
        });
        (0, vitest_1.expect)(result).toBe(5);
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week in locale", () => {
        const result = (0, index_js_1.getWeeksInMonth)(new Date(2015, 1 /* Feb */, 8, 18, 0), {
            locale: {
                options: { weekStartsOn: 1 },
            },
        });
        (0, vitest_1.expect)(result).toBe(5);
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const result = (0, index_js_1.getWeeksInMonth)(new Date(2015, 1 /* Feb */, 8, 18, 0), {
            weekStartsOn: 1,
            locale: {
                options: { weekStartsOn: 0 },
            },
        });
        (0, vitest_1.expect)(result).toBe(5);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.getWeeksInMonth)(new Date(2017, 3 /* Apr */, 8, 18, 0).getTime());
        (0, vitest_1.expect)(result).toBe(6);
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        (0, index_js_1.getWeeksInMonth)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    });
    (0, vitest_1.it)("returns NaN if the date is `Invalid Date`", () => {
        const result = (0, index_js_1.getWeeksInMonth)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
