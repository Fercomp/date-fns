"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("minutesToMilliseconds", () => {
    (0, vitest_1.it)("converts minutes to milliseconds", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToMilliseconds)(1)).toBe(60000);
        (0, vitest_1.expect)((0, index_js_1.minutesToMilliseconds)(2)).toBe(120000);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToMilliseconds)(0.123456)).toBe(7407);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToMilliseconds)(1.5)).toBe(90000);
        (0, vitest_1.expect)((0, index_js_1.minutesToMilliseconds)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToMilliseconds)(1.123456)).toBe(67407);
        (0, vitest_1.expect)((0, index_js_1.minutesToMilliseconds)(-1.123456)).toBe(-67407);
    });
});
