"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("hoursToMilliseconds", () => {
    (0, vitest_1.it)("converts hours to milliseconds", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToMilliseconds)(1)).toBe(3600000);
        (0, vitest_1.expect)((0, index_js_1.hoursToMilliseconds)(2)).toBe(7200000);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToMilliseconds)(0.123456)).toBe(444441);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToMilliseconds)(1.5)).toBe(5400000);
        (0, vitest_1.expect)((0, index_js_1.hoursToMilliseconds)(0)).toBe(0);
    });
    (0, vitest_1.it)("works with negative numbers properly", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToMilliseconds)(1.234567)).toBe(4444441);
        (0, vitest_1.expect)((0, index_js_1.hoursToMilliseconds)(-1.234567)).toBe(-4444441);
    });
});
