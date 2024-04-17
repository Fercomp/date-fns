"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("startOfDecade", () => {
    (0, vitest_1.it)("returns the date with the time set to 00:00:00 and the date set to the first day of a year", () => {
        const date = new Date(1953, 3 /* Apr */, 13);
        const result = (0, index_js_1.startOfDecade)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(1950, 0 /* Jan */, 1));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(1984, 9 /* Oct */, 14).getTime();
        const result = (0, index_js_1.startOfDecade)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(1980, 0 /* Jan */, 1));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(1978, 10 /* Nov */, 14);
        (0, index_js_1.startOfDecade)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(1978, 10 /* Nov */, 14));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.startOfDecade)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.startOfDecade)(new Date(2009, 0, 1))).toEqual(new Date(2000, 0, 1));
        (0, vitest_1.expect)((0, index_js_1.startOfDecade)(new Date(-2001, 0, 1))).toEqual(new Date(-2010, 0, 1));
    });
});
