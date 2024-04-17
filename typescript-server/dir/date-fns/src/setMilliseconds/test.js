"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setMilliseconds", () => {
    (0, vitest_1.it)("sets the milliseconds", () => {
        const result = (0, index_js_1.setMilliseconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 300);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setMilliseconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(), 755);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500);
        (0, index_js_1.setMilliseconds)(date, 137);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setMilliseconds)(new Date(NaN), 300);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setMilliseconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
