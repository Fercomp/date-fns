"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("yearsToQuarters", () => {
    (0, vitest_1.it)("converts years to quarters", () => {
        (0, vitest_1.expect)((0, index_js_1.yearsToQuarters)(1)).toBe(4);
        (0, vitest_1.expect)((0, index_js_1.yearsToQuarters)(2)).toBe(8);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.yearsToQuarters)(1.3)).toBe(5);
        (0, vitest_1.expect)((0, index_js_1.yearsToQuarters)(0.2)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.yearsToQuarters)(1.5)).toBe(6);
        (0, vitest_1.expect)((0, index_js_1.yearsToQuarters)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.yearsToQuarters)(1.23)).toBe(4);
        (0, vitest_1.expect)((0, index_js_1.yearsToQuarters)(-1.23)).toBe(-4);
    });
});
