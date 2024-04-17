"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("endOfDecade", () => {
    (0, vitest_1.it)("returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a decade", () => {
        const date = new Date(2017, 3 /* Apr */, 10, 0, 0, 0);
        const result = (0, index_js_1.endOfDecade)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2019, 11 /* Dec */, 31, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2007, 9 /* Oct */, 10, 0, 0, 0).getTime();
        const result = (0, index_js_1.endOfDecade)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2009, 11 /* Dec */, 31, 23, 59, 59, 999));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2038, 0 /* Jan */, 19, 3, 14, 8);
        (0, index_js_1.endOfDecade)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2038, 0 /* Jan */, 19, 3, 14, 8));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.endOfDecade)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.endOfDecade)(new Date(2001, 0, 1))).toEqual(new Date(2009, 11, 31, 23, 59, 59, 999));
        (0, vitest_1.expect)((0, index_js_1.endOfDecade)(new Date(-2009, 0, 1))).toEqual(new Date(-2001, 11, 31, 23, 59, 59, 999));
    });
});
