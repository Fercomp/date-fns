"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("quartersToMonths", () => {
    (0, vitest_1.it)("converts quarters to months", () => {
        (0, vitest_1.expect)((0, index_js_1.quartersToMonths)(1)).toBe(3);
        (0, vitest_1.expect)((0, index_js_1.quartersToMonths)(2)).toBe(6);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.quartersToMonths)(1.5)).toBe(4);
        (0, vitest_1.expect)((0, index_js_1.quartersToMonths)(0.3)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.quartersToMonths)(0.4)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.quartersToMonths)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.quartersToMonths)(12.34)).toBe(37);
        (0, vitest_1.expect)((0, index_js_1.quartersToMonths)(-12.34)).toBe(-37);
    });
});
