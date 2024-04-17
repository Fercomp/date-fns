"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setDate", () => {
    (0, vitest_1.it)("sets the day of the month", () => {
        const result = (0, index_js_1.setDate)(new Date(2014, 8 /* Sep */, 1), 30);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 30));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setDate)(new Date(2014, 8 /* Sep */, 1).getTime(), 25);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 25));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.setDate)(date, 20);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setDate)(new Date(NaN), 30);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setDate)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
