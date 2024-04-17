"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("endOfMonth", () => {
    (0, vitest_1.it)("returns the date with the time set to 23:59:59.999 and the date set to the last day of a month", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.endOfMonth)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
        const result = (0, index_js_1.endOfMonth)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        (0, index_js_1.endOfMonth)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("works for last month in year", () => {
            const date = new Date(2014, 11 /* Dec */, 1, 0, 0, 0);
            const result = (0, index_js_1.endOfMonth)(date);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999));
        });
        (0, vitest_1.it)("works for last day of month", () => {
            const date = new Date(2014, 9 /* Oct */, 31);
            const result = (0, index_js_1.endOfMonth)(date);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 9 /* Oct */, 31, 23, 59, 59, 999));
        });
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.endOfMonth)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
