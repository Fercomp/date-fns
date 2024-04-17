"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("yearsToMonths", () => {
    (0, vitest_1.it)("converts years to months", () => {
        (0, vitest_1.expect)((0, index_js_1.yearsToMonths)(1)).toBe(12);
        (0, vitest_1.expect)((0, index_js_1.yearsToMonths)(2)).toBe(24);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.yearsToMonths)(1.7)).toBe(20);
        (0, vitest_1.expect)((0, index_js_1.yearsToMonths)(0.1)).toBe(1);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.yearsToMonths)(1.5)).toBe(18);
        (0, vitest_1.expect)((0, index_js_1.yearsToMonths)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.yearsToMonths)(1.23)).toBe(14);
        (0, vitest_1.expect)((0, index_js_1.yearsToMonths)(-1.23)).toBe(-14);
    });
});
