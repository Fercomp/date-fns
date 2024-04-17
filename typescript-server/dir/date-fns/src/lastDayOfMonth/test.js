"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("lastDayOfMonth", () => {
    (0, vitest_1.it)("returns the date with the time set to 00:00:00 and the date set to the last day of a month", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.lastDayOfMonth)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 30));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 7 /* Aug */, 2, 11, 55, 0).getTime();
        const result = (0, index_js_1.lastDayOfMonth)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 31));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        (0, index_js_1.lastDayOfMonth)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("works for the February of a leap year", () => {
            const date = new Date(2012, 1 /* Feb */, 11, 11, 55, 0);
            const result = (0, index_js_1.lastDayOfMonth)(date);
            (0, vitest_1.expect)(result).toEqual(new Date(2012, 1 /* Feb */, 29));
        });
        (0, vitest_1.it)("works for the February of a non-leap year", () => {
            const date = new Date(2014, 1 /* Feb */, 11, 11, 55, 0);
            const result = (0, index_js_1.lastDayOfMonth)(date);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 28));
        });
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.lastDayOfMonth)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
