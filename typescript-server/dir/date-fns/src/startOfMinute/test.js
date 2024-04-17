"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("startOfMinute", () => {
    (0, vitest_1.it)("returns the date with the time set to the first millisecond of a minute", () => {
        const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
        const result = (0, index_js_1.startOfMinute)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 11 /* Dec */, 1, 22, 15).getTime();
        const result = (0, index_js_1.startOfMinute)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400);
        (0, index_js_1.startOfMinute)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.startOfMinute)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
