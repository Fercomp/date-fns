"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("endOfISOWeek", () => {
    (0, vitest_1.it)("returns the date with the time set to 23:59:59:999 and the date set to the last day of an ISO week", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.endOfISOWeek)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0).getTime();
        const result = (0, index_js_1.endOfISOWeek)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 16, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        (0, index_js_1.endOfISOWeek)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.endOfISOWeek)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
