"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setHours", () => {
    (0, vitest_1.it)("sets the amount of hours", () => {
        const result = (0, index_js_1.setHours)(new Date(2014, 8 /* Sep */, 1, 11, 30), 4);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 4, 30));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setHours)(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 5));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1, 11);
        (0, index_js_1.setHours)(date, 12);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setHours)(new Date(NaN), 4);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setHours)(new Date(2014, 8 /* Sep */, 1, 11, 30), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
