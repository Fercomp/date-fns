"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("lastDayOfQuarter", () => {
    (0, vitest_1.it)("returns the date with the time set to 00:00:00 and the date set to the last day of a quarter", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        const result = (0, index_js_1.lastDayOfQuarter)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 30));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
        const result = (0, index_js_1.lastDayOfQuarter)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 30));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
        (0, index_js_1.lastDayOfQuarter)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.lastDayOfQuarter)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
