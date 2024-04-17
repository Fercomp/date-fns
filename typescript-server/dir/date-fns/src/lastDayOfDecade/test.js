"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("lastDayOfDecade", () => {
    (0, vitest_1.it)("returns the date with the time set to 00:00:00 and the date set to the last day of a decade", () => {
        const date = new Date(1985, 9 /* Oct */, 20);
        const result = (0, index_js_1.lastDayOfDecade)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(1989, 11 /* Dec */, 31));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(1975, 0 /* Jan */, 19).getTime();
        const result = (0, index_js_1.lastDayOfDecade)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(1979, 11 /* Dec */, 31));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2013, 3 /* Apr */, 23);
        (0, index_js_1.lastDayOfDecade)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2013, 3 /* Apr */, 23));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.lastDayOfDecade)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.lastDayOfDecade)(new Date(2001, 0, 1))).toEqual(new Date(2009, 11, 31));
        (0, vitest_1.expect)((0, index_js_1.lastDayOfDecade)(new Date(-2009, 0, 1))).toEqual(new Date(-2001, 11, 31));
    });
});
